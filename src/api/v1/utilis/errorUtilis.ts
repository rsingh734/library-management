/**
 * Extract user-friendly message from unknown errors
 */
export const getErrorMessage = (error: unknown): string => {
    if (error instanceof Error) return error.message;
    return String(error);
};

/**
 * Extract error code from Firebase, AppError, or unknown
 */
export const getErrorCode = (error: unknown): string => {
    if (error instanceof Error) {
        const firebaseErr = error as any;
        return firebaseErr.code || "UNKNOWN_ERROR";
    }
    return "UNKNOWN_ERROR";
};
