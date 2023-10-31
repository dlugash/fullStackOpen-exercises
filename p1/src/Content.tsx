import React from "react";
import Part from "./Part";

interface ContentProps { id: number, exercises: number, name: string }[];

const Content = ({ parts }: ContentProps) => {  
  return (
    <div>
      {parts.map(part => 
        <Part
          part={part.name}
          key={part.id}
          exercises={part.exercises}
        />
      )}
    </div>
  )
}

export default Content;
