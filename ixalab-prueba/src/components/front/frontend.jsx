import React from "react";
import MySlider from "./slider/slider";

const Frontend = ({UrlImages})=>{
    return(
        <div>
            <MySlider images={UrlImages}/>            
        </div>
    )
}

export default Frontend;