import React from "react";
import './tareas.css'
import Tarea from "../tarea/tarea";

const Tareas = ({tareasTech, objetivos})=>{
    return(
            <div>
                <h1>Prueba Tecnica Ixalab</h1>
        <div className="tareas-container">
            
            {tareasTech.map((element, index) => {
                
                return  <Tarea key={index} nombre={element.nombre} objetivo={element.objetivos}/>
                
            })}

            </div>
        </div>
    ) 
    
}

export default Tareas;