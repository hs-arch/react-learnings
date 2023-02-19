import logo from './logo.svg';
import './App.css';
import React from 'react';
import Nav from './Components/Navbar';
import Main from './Components/Main';
import Contact  from './Components/Contact';
import Map_Functionality from './Components/Map_Functionality';

function HamidApp() {
  //debugger;
  return (
    <div className="HamidApp">
      {/* Hello from course after main app change again . */}
      {/* <Nav />
      <Main /> */}

      <Map_Functionality />

      {/* <Contact name="John Doe" position="Architect" YOE={15} />
      <Contact name="Hamid Sarfaraz" position="TDP" YOE={1} />
      <Contact name="Mayank Dwivedi" position="Manager" YOE={13} />
      <Contact name="Gupta Milan" position="SDE" YOE={10} />
      <Contact name="Aparna Kolanu"  position="Team Leader" YOE={10} />
      <Contact name="New Comer"  position="" YOE={0} />  */}
    </div>
  );
}

//This App method is being exported. and is being called as tag <HamidApp /> in index.js under ReactDOM mainly.
export default HamidApp;
