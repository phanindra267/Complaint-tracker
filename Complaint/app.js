import express from 'express';
import complaintRoutes from './routes/complaint.routes.js';
import loggerMiddleware from './middleware/logger.middleware.js';

const app = express();

app.use(express.json());

// App-level middleware
app.use(loggerMiddleware);

// Routes
app.use('/complaints', complaintRoutes);

export default app;
