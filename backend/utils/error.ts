import type { Request, Response, NextFunction } from 'express';

interface CustomError extends Error {
    statusCode?: number;
}

interface AppError extends Error {
    status?: number;
}


export const errorHandler = (statusCode: number, message: string) => {
    const error = new Error() as CustomError;
    error.statusCode = statusCode;
    error.message = message;
    return error;
};

export const errorMiddleware = (
    err: AppError,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.error(err);
    res.status(err.status || 500).json({
        message: err.message || 'Internal Server Error',
    });
};
