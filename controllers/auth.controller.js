import mongoose from "mongoose";
import {JWT_EXPIRES_IN, JWT_SECRET} from "../config/env.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const signUp = async (req, res, next) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const {name, email, password} = req.body;

        const existingUser = await User.findOne({email});

        if (existingUser) {
            const error = new Error('User already exists');
            error.status = 409;
            throw error;
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const newUsers = await User.create([{name, email, password: hashPassword}], {session});

        const payload = {userId: newUsers[0]?._id || 0};

        const token = jwt.sign(payload, JWT_SECRET, {expiresIn: JWT_EXPIRES_IN});

        await session.commitTransaction();
        session.endSession();

        res.status(201).json({
            success: true,
            message: `User signed up successfully.`,
            data: {
                token,
                user: newUsers[0]
            }
        })
    } catch (error) {
        console.log(error);
        await session.abortTransaction();
        session.endSession();
        next(error);
    }
}

export const signIn = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});

        if (!user) {
            const error = new Error('User not found.');
            error.status = 404;
            throw error;
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            const error = new Error('Invalid password');
            error.status = 401;
            throw error;
        }

        const token = jwt.sign({userId: user._id}, JWT_SECRET, {expiresIn: JWT_EXPIRES_IN});

        res.status(200).json({
            success: true,
            message: `User signed in successfully.`,
            data: {
                token,
                user
            }

        });
    } catch (err) {
        next(err);
    }
}

export const signOut = async (req, res) => {

}
