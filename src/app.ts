import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import booksRoutes from './api/v1/routes/books.routes';
import authorsRoutes from './api/v1/routes/authors.routes';
import membersRoutes from './api/v1/routes/members.routes';
import setupSwagger from "./config/swagger";
import loansRoutes from './api/v1/routes/loans.routes';
import notificationsRoutes from './api/v1/routes/notifications.routes';
import { getHelmetConfig } from './config/helmetConfig';
import getCorsOptions from './config/corsConfig';
import errorHandler from "../src/middleware/errorHandler";
import {
    accessLogger,
    errorLogger,
    consoleLogger,
} from "../src/middleware/logger";



// Load environment variables
dotenv.config();

const app = express();

// Security middleware
app.use(getHelmetConfig());

// CORS middleware
app.use(cors(getCorsOptions()));

// Built-in JSON middleware
app.use(express.json());

app.use(errorHandler); 

// Routes
app.use('/api/v1/loans', loansRoutes);
app.use('/api/v1/notifications', notificationsRoutes);
app.use('/api/v1/books', booksRoutes);
app.use('/api/v1/authors', authorsRoutes);
app.use('/api/v1/members', membersRoutes);
setupSwagger(app);


// Simple health check
app.get('/', (req: Request, res: Response) => {
  res.send('API is running!');
});


if (process.env.NODE_ENV === "production") {
    // In production, log to files
    app.use(accessLogger);
    app.use(errorLogger);
} else {
    // In development, log to console for immediate feedback
    app.use(consoleLogger);
}
    
export default app;
