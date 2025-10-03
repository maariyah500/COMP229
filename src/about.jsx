
import React from 'react';
import Picture from '../src/assets/me.jpg';
import Resume from '../src/Resume - Maariyah Shaikh.pdf';



export default function About(){
  return (
    <>

    <div id="wrapper">
    
    <h1 id="pageTitle"><span id="highlight">About Me</span></h1>

      <div class="grid">

        <img src={Picture} alt="picture" id="picture2" class="grid-item2"/>


        <h2 class="grid-item1">
          My name is <span id="highlight">Maariyah Mohammed Shaikh</span>. 
          <br/> 
          I am currently enrolled in the  

          <span id="highlight"> Software Engineering and <br/> Technology</span> program <br/>at &nbsp; 
          
          <span id="college"><span id="college1">Centennial</span> <span id="college2">College</span></span>.
          <br/> 
          <br></br>
          This is my <span id="highlight">third</span> semester of the course, and I graduate in Winter 2027.
          <br/> 
          <br></br>
          At <span id="highlight">Centennial College</span>I have explored many different <span id="highlight">softwares</span> and gained various 
          <span id="highlight"> programming skills</span> that would make me an <span id="highlight">asset</span> for any company I join in the future.
          <br/> 

        </h2>

      </div>

      <div class="grid">

        <h2 class="grid-item1">
        I enjoy <span id="highlight">sewing</span>, spending time with my <span id="highlight">family</span>, and playing with my <span id="highlight">cats</span> and <span id="highlight">daughter</span> in my spare time. 
        My interest in <span id="highlight">software enginnering</span> drives me to excel in my studies and pursue a career in this field.
        Click <a href={Resume} target='_blank' id="linkAbout">Here</a> to see my Resume.
        </h2>


      </div>
      
    </div>
    </>
  )
  
}
