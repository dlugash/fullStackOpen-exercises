import React from "react";

import Part from "./Part";

interface Course {
  id: number;
  exercises: number;
  name: string
};

interface ContentProps {
  parts: Course[]
};

const Content : React.FC<ContentProps> = ({ parts }) => {
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
