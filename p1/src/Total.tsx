import React from "react";

interface PartsProps {
  name: string,
  exercises: number
}

interface TotalProps {
  parts: PartsProps[]
}

const Total = ({ parts }: TotalProps) => {
  const exercises = parts.map(part => part.exercises);
  const sum = exercises.reduce((ex, ex1) => ex + ex1)
  return (
    <p>
      Number of exercises {sum}
    </p>
  )
}

export default Total;