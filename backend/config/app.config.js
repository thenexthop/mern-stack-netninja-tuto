import express from 'express';


const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({
    msg: "This app is working well...",
  })
});

export default app;