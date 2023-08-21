
const WorkoutDetails = ({ title, reps, load, createdAt }) => {
  return (
    <>
      <div className="workout-details">
        <h4>{ title }</h4>
        <p><strong>Load: </strong>{ load }</p>
        <p><strong>Reps: </strong>{ reps }</p>
        <p>{ createdAt }</p>
      </div>
    </>
  )
}

export default WorkoutDetails