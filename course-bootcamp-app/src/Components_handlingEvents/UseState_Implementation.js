import React, {useState} from "react";
import OutputDiv from "./OutputDiv";

export default function UseState_Implementation(){
    
    // const state = React.useState("Hello");

    const[number, setNumber] = React.useState(0);
    console.log(number);
    
    // But this is not a good practice
    
    // function increaseValue() {
    //     setNumber(number+1); 
    // }

    //This is a good practice
    function increaseValue() {
        setNumber( 
            function(){ return number + 1; }
        ); 
    }

    function decreaseValue() {
        setNumber(number-1);
    }

    return(
        <div>
            <button onClick={increaseValue}> + </button>

            {/* <div className="output--div">
                <h1>Output div : {number}</h1>
            </div> */}

            <OutputDiv number={number}/>

            <button onClick={decreaseValue}> - </button>

        </div>
    )
}