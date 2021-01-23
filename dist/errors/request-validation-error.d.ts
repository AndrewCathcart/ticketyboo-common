import { ValidationError } from 'express-validator';
import { CustomError, FormattedErrors } from './custom-error';
export declare class RequestValidationError extends CustomError {
    errors: ValidationError[];
    statusCode: number;
    constructor(errors: ValidationError[]);
    serializeErrors(): FormattedErrors;
}
