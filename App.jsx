import { useState } from 'react'
import './App.css'
import FormComp from './components/FormComp'
import Products from './components/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
 <FormComp /> 
    <Products />
      </div>
    </>
  )
}

export default App
