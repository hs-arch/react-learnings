import React from "react";
import UseState_Implementation from "./UseState_Implementation";


export default function OutputDiv(props){
    return(
        <div className="output--div">
                <h1>Output divs : {props.number}</h1>
        </div> 
    )
}