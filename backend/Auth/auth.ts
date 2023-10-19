
// proper
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const secretKey = process.env.ACCESS_TOKEN_SECRET; // Replace with your secret key

export const verifyAccessToken = (req: Request, res: Response, next: NextFunction) => {
  const accessToken = req.headers.authorization;

  if (!accessToken) {
    return res.status(401).json({ error: 'Access token is missing' });
  }
  try {
    const decoded = jwt.verify(accessToken, secretKey as string) as { userId: string };
    next(); 
  } catch (err) {
    console.error(err);
    return res.status(401).json({ error: 'Invalid access token' });
  }
};

