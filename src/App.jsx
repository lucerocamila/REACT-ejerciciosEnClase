import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  //llamando a una API
const [character, setCharacter] = useState({})
//haciendo la peticion con el useEffect
useEffect(() => {
  /*axios punto metodo get*/
axios.get('https://www.breakingbadapi.com/api/characters/random')
 /*https://www.breakingbadapi.com/api/
->(base url) +
 /api/characters 
->(Endpoint)*/
.then(res => setCharacter(res.data));
/*en el then recibo la respuesta y aqui voy a setear mi estado
la res siempre va aser un objeto*/
console.log(character);/*aqui voy a ver que esta almacenando la respuesta de la API*/
}, []); /*[] es un arreglo de dependencia*/
  return (
  <div className= 'App'>
      <h1>{character[0]?.name}</h1>
      <img src={character[0]?.img} alt="" />
   
  </div>

   );
  }

export default App

