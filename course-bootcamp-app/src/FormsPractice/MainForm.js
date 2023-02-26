import React from "react";

export default function MainForm(){


    //passing an Object value in useState,  this object will create all data of the form
    const[formData, setFormData] = React.useState(
        
        {
            firstName:"",
            lastName:"",
            email:"",
            check_box:"false"
        }
        
        );

    function handleChange(event){
        console.log("event : ",event);


        setFormData(function(prevFormData) {
            console.log("Previous form Data",prevFormData);


            //destructing it.
            // meaning the event.target has sooo many values. i just took out values that i need.
            // this helps if i needs values other than "name" attribute, i can just destruct it here and update the state. like for checkboxes, i could call in "checked" attribute
            //  const{name, value, checked} = event.target;
            // and now this checked could ve used to update whether the checkbox has been updated or not.

            const{name, value, type, checked} = event.target;
            
            let x="";

            if(type === "checkbox"){
                x = checked
            }else{
                x = value;
            }

            return {
                ...prevFormData,
                [name]:x 
               
            }
        });

        
    }

    console.log("Current form data",formData);
    
    // console.log(lastName);

    return(
            <form>
                <input 
                    type="text" 
                    placeholder="firstname"
                    onChange={handleChange}
                    name="firstName"

                    //Controlled Components
                    // By adding this value field the "state" is in control of what the <input> DOM has to show
                    // If not then what happends is <input> DOM tells the state what values to have.
                    // and we want the states of the form to be in control not the input tags DOM, hence easier maintianing the states.
                    // so we assign a value as fornData.firstName , thereby giving the useState control.
                    value={formData.firstName}

                />
                <input 
                    type="text" 
                    placeholder="lastname"
                    onChange={handleChange}
                    name="lastName"

                    // making it controlled component
                    value={formData.lastName}
                />

                <input 
                    type="text" 
                    placeholder="email"
                    onChange={handleChange}
                    name="email"

                    // making it controlled component
                    value={formData.email}
                />

                <input 
                    type="checkbox"
                    name="check_box"
                    checked={formData.isChecked}
                    onChange={handleChange}
                />

            </form>
        )
} 