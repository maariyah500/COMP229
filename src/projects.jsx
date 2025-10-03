
import React from 'react';
import CookBook from '../src/assets/online-cookbook.jpg';
import BugSmasherGame from '../src/assets/bugSmasherGame.png';
import CourseForm from '../src/assets/course-form.jpg';

export default function Projects(){
  return (
    <>
      <div id="wrapper">

        <h1 id="pageTitle">My Past <span id="highlight">Projects</span></h1>

        <div class="grid">

          <div>
            <h1>
              Online CookBook
              <br/>
              
            </h1>

            <h2 id="projects-desc">
                For COMP213, I designed an online <span id="highlight">cookbook</span> website.
                <br/>
                This was a project I designed and implemented myself, and 
                it showcases my acquired <span id="highlight">skills</span> in <span id="highlight">HTML</span> and <span id="highlight">CSS</span>.
            </h2>

          </div>

          <img src={CookBook} alt="proj1" id="projectPics"/>

        </div>


        <br/>

        <div class="grid">

          
            
          <div id="Bug">
            <h1>
              Bug Smasher Game
              <br/>
            </h1>

            <h2 id="projects-desc">
            I created a bug smasher web game for COMP125 using <span id="highlight">concept coding</span> and <span id="highlight">design</span>. 
            The result was a <span id="highlight">well-designed</span>, <span id="highlight">visually appealing</span>, engaging game that showcased my <span id="highlight">skills</span> in <span id="highlight">JavaScript</span>,
            <span id="highlight"> HTML</span>, and <span id="highlight">CSS</span>.
            </h2>

          </div>

          <img src={BugSmasherGame} alt="proj2" id="projectPics"/>

        </div>

        <br/>
        <br/>

        <div class="grid">

          <div>
            <h1>
              Course Evaluation Form
              <br/>
              
            </h1>

            <h2 id="projects-desc">
                For COMP213, I designed a <span id="highlight">course evaluation form</span>, handling all evaluation entries for different courses. 
                The final form was a <span id="highlight">user-friendly</span> and <span id="highlight">organized</span> tool for the college to use in collecting data.
                This project <span id="highlight">showcases</span> my <span id="highlight">web-designing skills</span> in forms using <span id="highlight">HTML</span> and <span id="highlight">CSS</span>.
            </h2>

          </div>

          <img src={CourseForm} alt="proj3" id="projectPics"/>

        </div>
     

      </div>
    
    
    </>
  )
}
