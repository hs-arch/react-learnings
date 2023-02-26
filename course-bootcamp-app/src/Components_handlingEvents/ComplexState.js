import React from "react";

export default function ComplexState (){

    // const thingsArray = ["Thing 11", "Thing 22"];
       const[things2Array, setThingsArray] = React.useState(["Thing 1","Thing 2"]);

        console.log(things2Array);


    function addItem(){
        // setThingsArray("Thing C");

        setThingsArray(
            function(previousArray){
                return [...previousArray, "Thing " + (previousArray.length+1)]
            }
        )

    }

    // const thingsElement = thingsArray.map(thing => <p key={thing}>{thing}</p>)

    // const thingsElement = thingsArray.map(
    //     function(items){
    //         return (<p>{items}</p>)
    //     }
    // )
    
    const things2Element = things2Array.map(
        function(items){
            return (<p key={items}>{items}</p>)
        }
    )


    return(
        <div>
            {things2Element}
            <button onClick={addItem}>Add Item</button>    
        </div>
        
    )
}