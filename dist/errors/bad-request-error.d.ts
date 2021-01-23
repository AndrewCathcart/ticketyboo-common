import { CustomError, FormattedErrors } from './custom-error';
export declare class BadRequestError extends CustomError {
    message: string;
    statusCode: number;
    constructor(message: string);
    serializeErrors(): FormattedErrors;
}
