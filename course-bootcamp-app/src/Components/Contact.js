import React from "react";
// import pic1 from "../"
// import b1 from '.././Images/pexels-daniel-217872.jpg';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';

export default function Contact(data){
// export default function Contact({name, position}}){

    //Object destructuring
    //Here we declare const {name,position} and two new variables and get the values from "data" into these variables "name" and "position". then we can use it.
    // Instead of accesssing the values as data.name and data.position.
    // This is the concept of destructing props.

    const {name,position,YOE,image} = data;
    console.log("1",name);
    console.log("2",position);
    console.log("3",YOE);
    //console/log("4",image);
    // hence if i want to do a destructing call in props i could also do it this way for the "Contact" declaration, instead of passing "data", pass the destructing props like below.
    
    // export default function Contact({name, position}}){

    // Destructing props ends here.

    return(
        <div className="conatiner">
            <div className="card">

                {data.image && <img src={data.image}/>}

                <div className="name"> 
                    {data.name && <h4><b>Name : {data.name}</b></h4>}
                    {/* Below line is a conditional rendering of the <p> tag . The below p tage will onlly render if the value in data.position is present.
                    If the data is not present the <p> tagg will not render for that particular call of <Contact /> from HamnidApp.js */}
                    {data.position && <p>Designation : {data.position}</p>}
                    {data.YOE && <p>Experience : {data.YOE}</p>}
                </div>
            </div>
        </div>

// <div className = "contact-card">
// {/* <img src = {b1} /> */}
// <h3>Mr Hisenberg</h3>

// <div className = "info-group">
//     <img src = ""/>
//     <p>9971834742</p>
// </div>

// <div className = "info-group">
//     <img src = ""/>
//     <p>hamid@email.com</p>
// </div>

// </div>
         
    )
}