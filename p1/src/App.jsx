import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 0
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 1
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 2
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App;
