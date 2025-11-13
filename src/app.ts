import express, { Request, Response } from 'express';
import booksRoutes from './api/v1/routes/books.routes';
import authorsRoutes from './api/v1/routes/authors.routes';
import membersRoutes from './api/v1/routes/members.routes';
import setupSwagger from "./config/swagger";
import loansRoutes from './api/v1/routes/loans.routes';
import notificationsRoutes from './api/v1/routes/notifications.routes';


const app = express();

// Built-in JSON middleware
app.use(express.json());

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

export default app;
