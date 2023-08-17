import { Router } from 'express';


const router = Router();

// GET All
router.get('/', (req, res) => {
  return res.status(200).json({
    msg: "Obtener TODOS los Workouts!",
  });
});

// GET one
router.get('/:id', (req, res) => {
  const {id} = req.params;

  if (!id) {
    return res.status(401).json({
      error: "No se ha indicado el Id del Workout.",
    });
  }

  return res.status(200).json({
    msg: `Retorna el Workout cuyo Id sea ${id}.`,
  });

});

// POST new Workout
router.post('/', (req, res) => {
  return res.status(200).json({
    msg: "Crea un NUEVO Workout en la BDatos...",
  });
});

// GET one
router.patch('/:id', (req, res) => {
  const {id} = req.params;

  if (!id) {
    return res.status(401).json({
      error: "No se ha indicado el Id del Workout.",
    });
  }

  return res.status(200).json({
    msg: `Actualiza el Workout cuyo Id sea ${id}.`,
  });
  
});

// DELETE delete Workout from DB
router.delete('/:id', (req, res) => {
  return res.status(200).json({
    msg: "Elimina el Workout con el Id indicado de la BDatos...",
  });
});


export default router;