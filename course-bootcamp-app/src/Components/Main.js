import React from 'react';
// import date from ''

function Main() {

    const date = new Date();
    const hour = date.getHours() % 12;
    const msg = "";

    // if(1){
    //     msg = "Good Afternoon";
    // }
    // if(hour>=4 && hour <= 7){
    //      msg = "Good Evening";
    // }
    // if(hour>7 && hour<3){
    //      msg = "Good Night";
    // }

    return(

        <h1>its about {date.getHours()} o'clock</h1>
    );
}

export default Main;