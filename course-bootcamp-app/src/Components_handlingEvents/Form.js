import React from "react";

export default function FormDa() {


    function handleClick(){
        console.log("I was clicked");
        // alert("I was clicked");
    }

    return (
        <div className="FormContainer">
            
            <div className="input--div">
                <label>UserName</label>
                <input type="text" />

                <label>Password</label>
                <input type="password" />
            </div>

            <div className="button--div">
                <button onClick={handleClick}>Login</button>
            </div>

        </div>
    )
}