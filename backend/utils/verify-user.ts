import type { Request, Response, NextFunction } from 'express'
import { errorHandler } from './error.js'
import jwt, { type JwtPayload } from 'jsonwebtoken'

const verifyUser = (req: Request & { user?: JwtPayload }, res: Response, next: NextFunction) => {
    const token = req.cookies.access_token

    if (!token) {
        return next(errorHandler(401, 'Unauthorized'))
    }

    jwt.verify(token, process.env.JWT_SECRET as string, (err: any, user: any) => {
        if (err) {
            return next(errorHandler(401, 'Unauthorized'))
        }
        req.user = user
        next()
    })
}