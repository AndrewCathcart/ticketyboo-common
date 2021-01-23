import { CustomError, FormattedErrors } from './custom-error';
export declare class NotFoundError extends CustomError {
    statusCode: number;
    constructor();
    serializeErrors(): FormattedErrors;
}
