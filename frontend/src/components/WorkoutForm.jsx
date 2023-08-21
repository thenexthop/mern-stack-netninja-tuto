import { useState } from 'react';

export default function WorkoutForm() {
  const [title, setTitle] = useState("");
  const [reps, setReps] = useState("");
  const [load, setLoad] = useState("");
  const [error, setError] = useState(null);
  
  async function onSubmit(e) {
    e.preventDefault();

    //console.log("Inputs: ", title, reps, load);
    // if(!title || !reps || !load){
    //   console.log("Se deben completar todos los campos.");
    //   return;
    // }  

    const workout = {title, reps, load}

    const res = await fetch("http://localhost:5400/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      }
    });

    const json = await res.json();
    
    if(!res.ok){
      console.log(json);
      setError(json.errorMsg);
      return;
    }
    
    if(json.status === "success") {
      console.log("it works!", json);
      setError(null)
      setTitle("")
      setLoad("")
      setReps("")
    }

  }

  return (
    <form className='form' onSubmit={onSubmit}>
      <h3>Add new Workout</h3>
      <label>Title: </label>  
      <input 
        className='input'
        name="title"
        onChange={(e)=> setTitle(e.target.value)}
        value={title}
      />
      <label>Reps: </label>  
      <input 
        className='input'
        type='number'
        name="reps"
        onChange={(e)=> setReps(e.target.value)}
        value={reps}
      />
      <label>Load (in Kgs.): </label>  
      <input 
        className='input'
        type='number'
        name="load"
        onChange={(e)=> setLoad(e.target.value)}
        value={load}
      />

      <button>Guardar</button>
      
      { error &&  <div className='error'>{error}</div>}

    </form>
  )
}