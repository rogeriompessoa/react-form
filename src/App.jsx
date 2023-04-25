import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserForm from './components/UserForm'
import UserFormObjectUser from './components/UserFormObjectUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <UserForm /> */}
      <UserFormObjectUser/>
    </>
  )
}

export default App
