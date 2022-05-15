import React from 'react'
import ReactDOM from 'react-dom'


export const Header = ({ course }) => <h1>{course}</h1>

export const Part = ({ part }) => <p>{part.name} {part.exercises}</p>


export const Content = ({ parts }) => parts.map(part => <Part part={part} />)

export const Total = ({ parts }) => <p>Number of exercises {parts.reduce((acc, part) => acc + part.exercises, 0)}</p>



const App = () => {

  const course ={
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))