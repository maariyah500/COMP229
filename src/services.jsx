
import React from 'react';
import CSharpLogo from '../src/assets/cSharpLogo.png';
import HTMLLogo from '../src/assets/HTMLLogo.png';
import CSSLogo from '../src/assets/CSS3_logo.png';
import PythonLogo from '../src/assets/pythonLogo.png';
import SQLLogo from '../src/assets/sqlLogo.png';
import JavaScriptLogo from '../src/assets/javaScriptLogo.png';
import LinuxLogo from '../src/assets/linuxLogo.png';
import ReactLogo from '../src/assets/reactLogo.png';


export default function Services(){
  return (
    <>
      <div id="wrapper">


        <h1 id="pageTitle"><span id="highlight">Services</span> I offer</h1>
        
        <div class="grid2">

        <div class="grid-item3">
          <h2 id="serviceTitle"><img src={CSharpLogo} alt="c#" id="leftLogo"/> C# </h2>

          <h2 id="service">
            Proficient in developing <span id="highlight2">basic level </span> 
            applications with <span id="highlight2">simple</span> programming functions.
          </h2>
        </div>

        <div class="grid-item3">
          <h2 id="serviceTitle"><img src={HTMLLogo} alt="htmlLogo" id="leftLogo"/>  HTML5 / CSS3  <img src={CSSLogo} alt="cssLogo" id="rightLogo"/></h2>

          <h2 id="service">
            <span id="highlight2">Proficient</span> in creating <span id="highlight2">user-friendly </span> 
            and visually <span id="highlight2">appealing</span> web and mobile interfaces using <span id="highlight2">HTML </span> 
            and <span id="highlight2">CSS</span> softwares.
          </h2>
        </div>  

        <div class="grid-item3">
          <h2 id="serviceTitle"><img src={PythonLogo} alt="pythonLogo" id="singleLogo"/>Python</h2>
          <h2 id="service">
          <span id="highlight2">Basic understanding</span> in writing <span id="highlight2">simple</span> and <span id="highlight2">readable </span>
           code for <span id="highlight2">web development</span> with <span id="highlight2">Python</span>.
          </h2>
        </div>

        <div class="grid-item3">
          <h2 id="serviceTitle"><img src={SQLLogo} alt="sqlLogo" id="singleLogo"/>SQL</h2>
          <h2 id="service">
            <span id="highlight2">Working knowledege</span> at designing and <span id="highlight2">managing</span> relational <span id="highlight2">databases </span>
            to ensure data <span id="highlight2">security</span> and <span id="highlight2">efficiency</span>.
          </h2>
        </div>

        <div class="grid-item3">
          <h2 id="serviceTitle"><img src={JavaScriptLogo} alt="javaScriptLogo" id="singleLogo"/>JavaScript</h2>
          <h2 id="service">
            <span id="highlight2">Sufficient experience</span> in creating <span id="highlight2">attention-grabbing </span> 
            and <span id="highlight2">interactive</span> web <span id="highlight2">applications</span> with <span id="highlight2">JavaScript</span>.
          </h2>
        </div>  

        <div class="grid-item3">
          <h2 id="serviceTitle"><img src={LinuxLogo} alt="linuxLogo" id="singleLogo"/>Unix / Linux</h2>
          <h2 id="service">
            <span id="highlight2">Basic knowledge</span> from coursework in using <span id="highlight2">Unix/Linux terminal </span> 
            for writing <span id="highlight2">system commands</span>  and <span id="highlight2">automating scripts</span>.
          </h2>
        </div>  

        <div class="grid-item3">
          <h2 id="serviceTitle"><img src={ReactLogo} alt="linuxLogo" id="singleLogo"/>React</h2>
          <h2 id="service">
            <span id="highlight2">Proficient</span> in creating and improving
            <span id="highlight2">visually pleasing</span> front-end web applications 
            with <span id="highlight2">React</span>.
          </h2>
        </div>  

        </div>
     

      </div>
    
    
    </>
  )
}
