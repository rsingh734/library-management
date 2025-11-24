import { Request, Response, NextFunction } from "express";
import { AppError } from "../api/v1/errors/errors";
import { HTTP_STATUS } from "../../src/constants/httpConstants";
import { errorResponse } from "../api/v1/models/responseMode";

/**
 * Global Error Handling Middleware
 * - Catches all errors thrown in controllers, services, and middleware
 * - Responds using a consistent JSON structure
 * - Handles custom AppError subclasses
 * - Logs errors for debugging
 */
const errorHandler = (
    err: Error | null,
    req: Request,
    res: Response,
    _next: NextFunction
): void => {

    // Safety check: If somehow a null error is passed
    if (!err) {
        console.error("Error: null or undefined error received");
         res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
            .json(errorResponse("An unexpected error occurred", "UNKNOWN_ERROR")
        );
        return;
    }

    // Always log the error message
    console.error(`Error: ${err.message}`);

    // Log stack trace only in non-production environments
    if (process.env.NODE_ENV !== "production" && err.stack) {
        console.error(err.stack);
    }

    // If this is one of your custom AppError types
    if (err instanceof AppError) {
        res.status(err.statusCode)
            .json(errorResponse(err.message, err.code)
        );
        return;
    }

    // All other errors → Unexpected / programming errors
        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
        .json(errorResponse("An unexpected error occurred", "UNKNOWN_ERROR")
    );
    return;
};

export default errorHandler;
