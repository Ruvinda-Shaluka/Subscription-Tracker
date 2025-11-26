import aj from '../config/arcjet.js';

const  arcjetMiddleware = async (req, res, next) => {
    try {
        const decision = await aj.protect(req,{ requested: 1 });

        if (decision.isDenied()) {
            if (decision.reason.isRateLimit()) {
                return res.status(429).json({error: decision.reason});
            }
            if (decision.reason.isBot()) {
                return res.status(403).json({error: decision.reason});
            }

            return res.status(403).json({error: decision.reason});
        }

        next();
    } catch (err) {
        console.log(`Arcjet Middleware Error: ${err.message}`);
        next(err);
    }
}

export default arcjetMiddleware;