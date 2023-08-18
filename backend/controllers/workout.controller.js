import mongoose from 'mongoose';
import Workout from '../models/workout.model.js';

// get all
export const getAllWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({}).sort({createdAt: -1});
    return res.status(200).json({
      status:"success",
      results: workouts.length,
      data: workouts
    })
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      errorMsg: error.message,
    })
  }
};

// get one workout
export const getWorkout = async (req, res) => {
  const { id } = req.params;

  try {
    const workout = await Workout.findById(id);

    if (!workout) {
      return res.status(404).json({
        status: "fail",
        errorMsg: "No existe ningun ejercicio registrado con ese identificador.",
      })
    }

    return res.status(200).json({
      status:"success",
      data: workout
    })
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      errorMsg: error.message,
    })
  }
};

// create
export const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;
  try {
    const newWorkout = await Workout.create({title, reps, load})
    return res.status(200).json({
      status: "success",
      data: newWorkout,
    })
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      errorMsg: error.message,
    })
  }
}

// PATCH update one workout
export const updateWorkout = async (req, res) => {
    
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id))
      return res.status(400).json({ 
        status: "fail",
        errorMsg: "Identificador no válido.", 
      });
    
    const updated = await Workout.findOneAndUpdate({ _id: id }, { ...req.body }, { 
      new: true,
      //runValidators: true 
  });

    if(!updated)
      return res.status(404).json({ 
        status: "fail",
        errorMsg: "No se encuentra registrado.", 
      });

    //Http code 200 + updated workout
    res.status(200).json({
        status: 'success',
        data: { updated }
    });
};

// DELETE one workout
export const deleteWorkout = async (req, res) => {
    
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id))
      return res.status(400).json({ 
        status: "fail",
        errorMsg: "Identificador no válido.", 
      });
    
    const deleted = await Workout.findByIdAndDelete({ _id: id });

    if(!deleted)
      return res.status(404).json({ 
        status: "fail",
        errorMsg: "No se encuentra registrado.", 
      });


    //Http code 204 - No content
    res.status(204).json({
        status: 'success',
        msg: 'Workout deleted.'
    });
}; 