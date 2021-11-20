const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
import { Request, Response, NextFunction } from "express";

const createToken = (user: { role: any; _id: any; email: any }) => {
  // Sign the JWT
  if (!user.role) {
    throw new Error("No user role specified");
  }
  return jwt.sign(
    {
      sub: user._id,
      email: user.email,
      role: user.role,
      iss: "api.dwarpal",
      aud: "api.dwarpal",
    },
    process.env.JWT_SECRET,
    { algorithm: "HS256", expiresIn: "24h" }
  );
};

const hashPassword = (password: any) => {
  return new Promise((resolve, reject) => {
    // Generate a salt at level 12 strength
    bcrypt.genSalt(12, (err: any, salt: any) => {
      if (err) {
        reject(err);
      }
      bcrypt.hash(password, salt, (err: any, hash: unknown) => {
        if (err) {
          reject(err);
        }
        resolve(hash);
      });
    });
  });
};

const verifyPassword = (passwordAttempt: any, hashedPassword: any) => {
  return bcrypt.compare(passwordAttempt, hashedPassword);
};

module.exports = {
  createToken,
  hashPassword,
  verifyPassword,
};
