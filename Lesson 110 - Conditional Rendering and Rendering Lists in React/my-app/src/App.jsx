import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [setshowbtn, setSetshowbtn] = useState(true)
  const [todos, setTodos] = useState([
    {
      title: "hey",
      desc: "I am a good todo"
    },
    {
      title: "hey another todo",
      desc: "I am a another todo"
    },
    {
      title: "hey another another todo",
      desc: "I am a another another todo"
    }
  ])

  // const Todo = ({ todo }) => {
  //   return (<>
  //     <div className="m-4 border border-1 border-purple-700">
  //       <div className="todo">{todo.title}</div>
  //       <div className="todo">{todo.desc}</div>
  //     </div>
  //   </>)
  // }

  return (
    <>
      {/* {setshowbtn?<button>I will be shown when second button is clicked</button>: "thenga"} */}
      {setshowbtn ? <button>setshowbtn is true</button> : <button>setshowbtn is false</button>}
      {/* {setshowbtn && <button>setshowbtn is true</button>} */}

      {
        todos.map(todo => {
          // return <Todo key={todo.title} todo={todo} />
          return <div key={todo.title} className="m-4 border-1 border-purple-700">
          {/* we have to give a unique prop as a key like here we gave key={todo.title} for react because it is a requirement when we try and render a list
          dont put above div in next line or it will throw error, div should be in same line as return */}
            <div className="todo">{todo.title}</div>
            <div className="todo">{todo.desc}</div>
          </div>
        })
      }

      <div className="card">
        <button onClick={() => setSetshowbtn(!setshowbtn)}>
          Toggle setshowbtn
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
