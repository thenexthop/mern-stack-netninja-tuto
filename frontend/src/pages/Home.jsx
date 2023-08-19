import { useEffect, useState } from "react";

// Components
import WorkoutDetails from "../components/WorkoutDetails";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);

  useEffect(()=>{
    const fetchWorkouts = async () => {
      const resp = await fetch("http://localhost:5400/api/workouts");
      const json = await resp.json();

      if(resp.ok) {
        const { data } = json;

        // console.log(data);
        setWorkouts(data);
      }
    }

    fetchWorkouts();
  }, []);

  return (
    <div className="home">
      <div className="workouts">
      { workouts && workouts.map(workout => (
        <WorkoutDetails 
          key={ workout._id } 
          workout={workout} 
        />
      )) }
      </div>
    </div>
  )
}

export default Home;