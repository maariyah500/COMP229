
import React from 'react';
import Picture from '../src/assets/me.jpg';
import Coding from '../src/assets/coding.jpg';
import { Link } from 'react-router-dom';
import About from '../src/about'


export default function Home(){
  return (
    <>

    <div id="wrapper">
    
      <div class="grid">

        <h2 class="grid-item1">
          Hello, My name is <span id="highlight">Maariyah Mohammed Shaikh</span>, 
          <br/> 
          and I am a <span id="highlight">Software Engineering Technology Student</span> at 
          <br/> 
          <span id="highlight">Centennial College</span>.
          <br/> 
          I always look forward to obtaining new
          <span id="highlight"> knowledge</span> and <span id="highlight">skill sets</span> as part of the learning experience.
          <br/> 
          <br/>
        </h2>

        <img src={Picture} alt="picture" id="picture" class="grid-item2"/>
        
      </div>

      <h1 id="goal">My Personal Goals</h1>

      <div class="grid-1">
        <img src={Coding} alt="coding"/>

        <h2 class="grid-item1">
        <br/>
          I aim to develop <span id="highlight">meaningful</span> software 
          that meets and exceeds ethical standards,
          and address real-world <span id="highlight">challenges</span>.
          <br/>   

        </h2>

      </div>
      <br/>
      <br/>

    </div>
    </>
  )
  
}
