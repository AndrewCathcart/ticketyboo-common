import { CustomError, FormattedErrors } from './custom-error';
export declare class DatabaseConnectionError extends CustomError {
    statusCode: number;
    reason: string;
    constructor();
    serializeErrors(): FormattedErrors;
}
