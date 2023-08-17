//import express from 'express';

// App
import app from './config/app.config.js'

// Constantes del entorno
import { PORT } from './config/env.config.js';


app.listen(PORT, () => {
  console.log(`app listening in port: ${PORT}`);
});