import React from "react";



const Singlecharacter=props=>{
    const {name, specie,  foto} = props;



return(
    <div className="elemento">
    <img src={foto} alt={specie} className="foto"/>
    <h1 className="texto1">{name}</h1>
    <h2 className="texto2">{specie}</h2>
    </div>

)
}
export default Singlecharacter;