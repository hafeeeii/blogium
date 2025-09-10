import type { Request, Response, NextFunction } from 'express';
import User from '../models/auth.model';
import { errorHandler } from '../utils/error';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';




export const signup = async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return next(errorHandler(400, 'Missing required fields'))
    }

    try {

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = new User({
            name,
            email,
            passwordHash: hashedPassword
        })

        await user.save()

        res.status(201).json('Signup successful')

    } catch (err) {
        next(err)
    }
}

export const signin = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    const JWT_SECRET = process.env.JWT_SECRET as string

    console.log(jwt, 'this is jwt')

    if (!email || !password) {
        return next(errorHandler(400, 'Missing required fields'))
    }

    try {
        const validUser = await User.findOne({ email })
        if (!validUser) {
            return next(errorHandler(404, 'User not found'))
        }

        const isValidPassword = await bcrypt.compare(password, validUser.passwordHash)

        if (!isValidPassword) {
            return next(errorHandler(401, 'Invalid credentials'))
        }

        const token = jwt.sign(
            { id: validUser._id, isAdmin: validUser.isAdmin },
            JWT_SECRET
        )

        res.status(200).cookie('access_token', token, {
            httpOnly: true
        }).json('Login successful')


    } catch (err) {
        next(err)
    }
}