import './App.css'
import Mensaje from './Message.jsx'
import Titulo from './Titulo.jsx'

const Hello = () => {
  return (
    <>
      <p>Hello World</p>
    </>
  )
}

const App = () => {
  const now = new Date ()
  const a = 10
  const b = 20

  console.log(now, a+b)

  return (
    <>
      <p>Hello world, it is {now.toString()}</p>
      <Hello />
    </>
  )
}

export default App
