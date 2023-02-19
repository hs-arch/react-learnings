import React from "react";

export default function Map_Functionality() {

    const nums = [1,2,3,4,5];
    const names = ["alice", "bob", "charlie", "danielle"];

    //to process this from the map function
    const squared  = nums.map(function (items){
        return items * items; 
    })

    const capArr = names.map(function(items){

            console.log(items);
            debugger;

            let temp = "";

            for(let i=0;i<items.length;i++){
            debugger;
                if(i == 0){
                    temp = temp + items.charAt(i).toUpperCase();
                }else{
                    temp = temp + items.charAt(i);
                }
            }

            debugger; 
            return temp;
            
    })

    console.log(capArr);
    console.log(squared); 

    return(
        <div>From map</div>
    )
}