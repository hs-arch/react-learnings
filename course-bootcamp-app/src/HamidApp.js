import logo from './logo.svg';
import './App.css';
import React from 'react';
import Nav from './Components/Navbar';
import Main from './Components/Main';
import Contact  from './Components/Contact';
import Map_Functionality from './Components/Map_Functionality';
// import b1 from './Images/pexels-daniel-217872.jpg';
// import b2 from './Images/pexels-fox-750841.jpg';
// import b3 from './Images/pexels-nishant-aneja-2393821.jpg';
// import b4 from './Images/pexels-pixabay-104842.jpg';
// import b5 from './Images/pexels-vikram-sundaramoorthy-1119796.jpg';
// import b6 from './Images/pexels-fox-750841.jpg';

import moviesData from './Data/MoviesData.json';
import Header from './Components/Header';

function HamidApp() {
  // const img1 = "https://image.tmdb.org/t/p/w500/1NqwE6LP9IEdOZ57NCT51ftHtWT.jpg";

  const movie_posters = moviesData.map(function (items){
      return items.poster;
  })

  console.log(movie_posters);

  // debugger;
  return (
    <div className="HamidApp">
      {/* Hello from course after main app change again . */}
      {/* <Nav />
      <Main /> */}

      {/* <Map_Functionality /> */}
      <Header />
      <Contact name="John Doe" position="Architect" YOE={15} image={movie_posters[0]}/>
      <Contact name="Hamid Sarfaraz" position="TDP" YOE={1} image={movie_posters[1]}/>
      <Contact name="Mayank Dwivedi" position="Manager" YOE={13} image={movie_posters[2]}/>
      <Contact name="Gupta Milan" position="SDE" YOE={10} image={movie_posters[3]}/>
      <Contact name="Aparna Kolanu"  position="Team Leader" YOE={10} image={movie_posters[4]}/>
      <Contact name="New Comer"  position="" YOE={0} image={movie_posters[5]}/>
      <Contact name="New Comer"  position="" YOE={0} image={movie_posters[6]}/>
      <Contact name="New Comer"  position="" YOE={0} image={movie_posters[7]}/>
      <Contact name="New Comer"  position="" YOE={0} image={movie_posters[8]}/>
      <Contact name="New Comer"  position="" YOE={0} image={movie_posters[9]}/>

      
      

      {/* <Contact image={movie_posters[0]}/>
      <Contact image={movie_posters[1]}/>
      <Contact image={movie_posters[2]}/>
      <Contact image={movie_posters[3]}/>
      <Contact image={movie_posters[4]}/>
      <Contact image={movie_posters[5]}/>
      <Contact image={movie_posters[6]}/>
      <Contact image={movie_posters[7]}/>
      <Contact image={movie_posters[8]}/>
      <Contact image={movie_posters[9]}/> */}

      {/* <Contact name="New Comer"  position="" YOE={0} image={movie_posters[5]}/>  */}
    </div>
  );
}

//This App method is being exported. and is being called as tag <HamidApp /> in index.js under ReactDOM mainly.
export default HamidApp;
