import express from 'express';

// Routes
import workoutRoutes from '../routes/workout.routes.js';

const app = express();

app.use(express.json());

app.use('/api/workouts', workoutRoutes);

app.get('/', (req, res) => {
  res.status(200).json({
    msg: "This app is working well...",
  })
});

export default app;