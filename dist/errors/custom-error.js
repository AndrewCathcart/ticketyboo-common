"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormattedErrors = exports.FormattedError = exports.CustomError = void 0;
var CustomError = /** @class */ (function (_super) {
    __extends(CustomError, _super);
    function CustomError(message) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, message) || this;
        Object.setPrototypeOf(_this, _newTarget.prototype);
        return _this;
    }
    return CustomError;
}(Error));
exports.CustomError = CustomError;
var FormattedError = /** @class */ (function () {
    function FormattedError(message, field) {
        this.message = message;
        this.field = field;
    }
    return FormattedError;
}());
exports.FormattedError = FormattedError;
var FormattedErrors = /** @class */ (function () {
    function FormattedErrors(errors) {
        this.errors = errors.map(function (err) {
            return new FormattedError(err.msg, err.param);
        });
    }
    return FormattedErrors;
}());
exports.FormattedErrors = FormattedErrors;
