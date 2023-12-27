import React from "react";
import './tarea.css'

const Tarea = ({nombre, objetivo})=>{
    return(
        <div className="card">
        <h2 className="title">{nombre}</h2>
        {objetivo.map((element) => {
            return <p>{element}</p>
        })}
        <button className="solution-button">Solution</button>
      </div>
    ) 
    
}

export default Tarea;