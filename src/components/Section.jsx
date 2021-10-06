//importamos 
//</Importacion de elementos>
import React from "react";


//</importacion de elementos>


const Section=(props)=>{
    const{titulo, descripcion}=props
    return(
        <>
   <h1>{titulo}</h1>
   <h2>{descripcion}</h2>
</>
    );


}
export default Section;