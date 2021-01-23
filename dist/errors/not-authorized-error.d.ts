import { CustomError, FormattedErrors } from './custom-error';
export declare class NotAuthorizedError extends CustomError {
    statusCode: number;
    constructor();
    serializeErrors(): FormattedErrors;
}
