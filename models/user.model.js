import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'User name is required'],
        trim: true,
        minlength: 3,
        maxlength: 50,
    },
    email: {
        type: String,
        required: [true, 'User email is required'],
        trim: true,
        unique: [true, 'User email is unique'],
        lowercase: true,
        match:[/\S+@\S+\.\S/, "please enter a valid email address."],
    },
    password: {
        type: String,
        required: [true, 'User password is required'],
        minlength: 8
    }
},{ timestamps: true });

const user = mongoose.model('User', userSchema);

export default user;