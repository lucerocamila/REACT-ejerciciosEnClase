import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // CREAR UN OBJETO DE DATOS QUE VARIA 
 const me = {
  name:'Lucerin',
  movie: 'Shrek',
  music: 'Pop'
  }
  return (
  <div className= 'App'>
    <div className= 'card'>
    <h1 className= 'red' >Sobre mí</h1>
   <ul>
   <li>{me.name}</li>  {/* AHORA EL NOMBRE VARIA */}
    <li>{me.movie}</li>
    <li>{me.music}</li>
   </ul>
   </div>
  </div>

   );
  }

export default App

