export class AppError extends Error {
    public statusCode: number;
    public isOperational: boolean;
    public details?: any;
    public errorCode?: string;

    constructor(
        message: string,
        statusCode = 500,
        isOperational = true,
        details?: any,
        errorCode?: string
    )   {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = this.constructor.name;
        this.statusCode = statusCode;
        this.isOperational = isOperational;
        this.details = details;
        this.errorCode = errorCode;

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
    }

}