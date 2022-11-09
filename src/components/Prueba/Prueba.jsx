import React from 'react'
import { useState } from 'react';

const Prueba = () => {
    
const arrayNombres = ["Guille", "Carlota", "Rodolgo", "Mario", "Jose", "Mondongo", "Ricardo", "Diego","Santi"];

const [nombre, setNombre] = useState(arrayNombres[0]);
    
const cambiarNombre = () => {

const posicionRandom = Math.floor(Math.random() * arrayNombres.length);

if (arrayNombres[posicionRandom] === nombre && posicionRandom !== 0) {
    setNombre(arrayNombres[posicionRandom - 1]);
    }else if(arrayNombres[posicionRandom] === nombre && posicionRandom === 0){
    setNombre(arrayNombres[posicionRandom + 1]);
}else{
    setNombre(arrayNombres[posicionRandom]);
}


}
    console.log("HOLA ME RENDERIZO DESDE PRUEBA.JSX!!");

  return (
    <div>
    
        <button onClick={cambiarNombre}>CAMBIAR NOMBRE ALEATORIO</button>
        <h2>{nombre}</h2>
    </div>
  )
}

export default Prueba;