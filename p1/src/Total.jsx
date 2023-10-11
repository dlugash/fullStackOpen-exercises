const Total = (props) => {
  const exercises = props.parts.map(part => part.exercises);
  const sum = exercises.reduce((ex, ex1) => ex + ex1)
  return (
    <p>
      Number of exercises {sum}
    </p>
  )
}

export default Total;