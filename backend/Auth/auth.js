"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyAccessToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secretKey = process.env.ACCESS_TOKEN_SECRET;
const verifyAccessToken = (req, res, next) => {
    try {
        const accessToken = req.headers.authorization;
        if (!accessToken) {
            return res.status(401).json({ error: 'Access token is missing' });
        }
        const decoded = jsonwebtoken_1.default.verify(accessToken, secretKey);
        console.log(decoded);
        req["userId"] = decoded.userId;
        next();
    }
    catch (err) {
        console.log(err);
        return res.status(401).json({ error: 'Invalid access token' });
    }
};
exports.verifyAccessToken = verifyAccessToken;
//req['userId'] = decoded.userId;
