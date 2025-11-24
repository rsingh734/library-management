import swaggerJsdoc from "swagger-jsdoc";

const swaggerOptions: swaggerJsdoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Library Management API Documentation",
            version: "1.0.0",
            description:
                "This is the API documentation for the Library Management application.",
        },
        servers: [
            {
                url: "http://localhost:5000/api/v1",
                description: "Local server",
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
            schemas: {
                Error: {
                    type: "object",
                    required: ["error", "message"],
                    properties: {
                        error: {
                            type: "string",
                            description: "Error type or code",
                            example: "VALIDATION_ERROR",
                        },
                        message: {
                            type: "string",
                            description: "Human-readable error message",
                            example: "The email field is required",
                        },
                        details: {
                            type: "array",
                            items: {
                                type: "object",
                                properties: {
                                    field: {
                                        type: "string",
                                        example: "email",
                                    },
                                    issue: {
                                        type: "string",
                                        example: "must be a valid email address",
                                    },
                                },
                            },
                            description: "Detailed validation errors (optional)",
                        },
                    },
                },
            },
        },
        security: [
            {
                bearerAuth: [],
            },
        ],
    },
    apis: ["./src/api/v1/routes/*.ts", "./src/api/v1/validations/*.ts"], // Path to the API docs and schemas
};

// Generate the Swagger spec
export const generateSwaggerSpec = (): object => {
    return swaggerJsdoc(swaggerOptions);
};
