import './App.css'
import Mensaje from './Message.jsx'
import Titulo from './Titulo.jsx'

const Hello = (props) => {
  console.log(props)
  return (
    <>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 32

  return (
    <>
      <h1>Greetings</h1>
      <Hello name='Antonio' age={26 +10} />
      <Hello name={name} age={age} />
    </>
  )
}

export default App
