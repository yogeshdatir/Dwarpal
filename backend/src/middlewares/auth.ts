import jwt from "jsonwebtoken";
import express, { Request, Response, NextFunction } from "express";

const auth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Authentication invalid" });
  }

  const decodedToken = jwt.verify(token, process.env.JWT_SECRET as string, {
    audience: "api.dwarpal",
    issuer: "api.dwarpal",
  });
  if (!decodedToken) {
    return res.status(401).json({
      message: "There was a problem authorizing the request",
    });
  } else {
    req.user = decodedToken;
    next();
  }
};

module.exports = { auth };
