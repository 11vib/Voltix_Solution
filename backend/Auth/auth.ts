
// proper
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const secretKey = process.env.ACCESS_TOKEN_SECRET;

export const verifyAccessToken = (req: any, res: Response, next: NextFunction) => {
  try {
  const accessToken = req.headers.authorization;

  if (!accessToken) {
    return res.status(401).json({ error: 'Access token is missing' });
  }
  
    const decoded = jwt.verify(accessToken, secretKey as string) as { userId: string };
    console.log(decoded);
    req["userId"] = decoded.userId;
    
    
    next(); 
  } catch (err) {
    console.log(err);
    return res.status(401).json({ error: 'Invalid access token' });
  }
};

//req['userId'] = decoded.userId;