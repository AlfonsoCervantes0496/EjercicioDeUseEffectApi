//</Importacion de elementos>
import React, { useState } from "react";
import "../stiles/header.css";

//</importacion de elementos>


const Header=props=>{
    const [dark ,setDark] =useState(true)
    const [text,setText] =useState("Con dark mode")
    //funciones
    const handleDark=()=>{
        if(dark===true){
        setDark(false)
        setText("sin darkmode")
        }
        else{
        setText("con darkmode")
        setDark(true)
        }
    }
    return(
        <>
        <header className={dark===true?"darkHeader":"NormalHeader"}>
            <p className={dark===true?"darkHeaderp":"NormalHeaderp"}>Este es la primera practica react</p>
        <ul className={dark===true?"darkHeaderUL":"NormalHeaderUL"}>
      <li>{props.uno}</li>
      <li>{props.dos}</li>
      <li><button onClick={handleDark}>Cambiar modo</button></li>
  
        </ul>
      </header>
      <h2>{text}</h2>
</>
    );


}
export default Header;