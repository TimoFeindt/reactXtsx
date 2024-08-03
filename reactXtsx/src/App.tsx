import './index.css'
import { useState } from 'react'
//import ToDoList from './Components/ToDoList'
import UserProfil from './Components/UserProfil'

export default function App(): JSX.Element {

  const [counter, setCounter] = useState(0)

  const handleClick = () => {
    setCounter(counter +1)
  }


  // const todos = [
  //   {
  //       id:'t1',
  //       text: 'Finish this course!',
  //   },
  //   {
  //       id:'t2',
  //       text: 'Finish chorse!',
  //   },
  // ]

  return (
    <>
      <h1>Typescript X React</h1>
      <button onClick={handleClick}>
        Increase me!
      </button>
      <h2>{counter}</h2>


      <UserProfil 
          name={'Timo'}
          job={'Web Developer'}
          mail={'test.test@test.de'}
      />
    </>
  )
}
