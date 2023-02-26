import React from "react";
import HeaderX from "./HeaderX.js";
import FooterX from "./FooterX.js";
// import Header from "";
// import Footer from "../C"

export default function Body(){


    // Calling this name state here in the body compont instead of the header component because i have raised its accesss from chile to parent
    // Now becasue of this i can send value to both Header and Footter via props.
    // Hence moved this state form Header to its parent.
    // Incase some other chile needs this value also, then again ill have move the state of this value to ITS parent, and send data via props. like done here
    
    const[name, setName] = React.useState("Joe");

    return(
        <div>
            <HeaderX name={name}/>
            <FooterX name={name}/>
        </div>
    )
}