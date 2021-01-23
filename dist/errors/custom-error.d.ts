import { ValidationError } from 'express-validator';
export declare abstract class CustomError extends Error {
    abstract statusCode: number;
    constructor(message: string);
    abstract serializeErrors(): FormattedErrors;
}
interface IFormattedErrors {
    errors: IFormattedError[];
}
interface IFormattedError {
    message: string;
    field?: string;
}
export declare class FormattedError implements IFormattedError {
    message: string;
    field?: string | undefined;
    constructor(message: string, field?: string | undefined);
}
export declare class FormattedErrors implements IFormattedErrors {
    errors: FormattedError[];
    constructor(errors: ValidationError[]);
}
export {};
