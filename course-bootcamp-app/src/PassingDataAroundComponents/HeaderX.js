import React from "react";

export default function HeaderX(props){

    // Because i need to pass this data to another chile component.
    // i am raising the state of Header above, hence declaring this in the body.
    // By doing so then using props i can pass this joe value to both Header and Footer child components.

    // const[name, setName] = React.useState("Joe");

    return(
        <div>
            {props.name}
        </div>
    )
}