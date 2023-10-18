"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyAccessToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
/// <reference path="auth.d.ts" />
const secretKey = process.env.ACCESS_TOKEN_SECRET;
// export const verifyAccessToken = (req: Request, res: Response, next: NextFunction) => {
//   const accessToken = req.headers.authorization;
//   if (!accessToken) {
//     return res.status(401).json({ error: 'Access token is missing' });
//   }
//   // Verify the access token here
//   try {
//     const decoded = jwt.verify(accessToken, secretKey) as { userId: string }; // Use your own secretKey
//     req.user = decoded;
//     next();
//   } catch (err) {
//     return res.status(401).json({ error: 'Invalid access token' });
//   }
// };
// Middleware to verify the access token
const verifyAccessToken = (req, res, next) => {
    const accessToken = req.headers.authorization;
    if (!accessToken) {
        return res.status(401).json({ error: 'Access token is missing' });
    }
    let userId; // Create a variable to store the userId
    // Verify the access token here
    try {
        const decoded = jsonwebtoken_1.default.verify(accessToken, secretKey);
        userId = decoded.userId;
    }
    catch (err) {
        console.log(err);
        return res.status(401).json({ error: 'Invalid access token' });
    }
    // Now, userId contains the decoded userId from the access token, and you can use it in your code.
    // For example, if you want to check user permissions or perform actions based on the user, you can do that here.
    next();
};
exports.verifyAccessToken = verifyAccessToken;
