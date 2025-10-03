
import React from 'react';
import InstaLogo from '../src/instaLogo.png';
import LinkedInLogo from '../src/linkedInLogo.png';
import FaceBooklogo from '../src/faceLogo.png';


export default function Contact(){
  return (
    <>
      <div id="wrapper">

      <h1 id="pageTitle"><span id="highlight">Contact Me</span> Here!</h1>

        <div class="grid">

          <div>
            <form action="mailto:maariyah614@gmail.com" method="POST" enctype="text/plain" id="contactForm">

              <label htmlFor="Name">Full Name</label><br/>
              <input type="text" name="Name" required/><br/>

              <label htmlFor="Phone Number">Phone/Cell Number</label><br/>
              <input type="number" name="Phone Number" maxlength="10" required/><br/>

              <label htmlFor="Email">Email</label><br/>
              <input type="text" name="Email" required/><br/>

              <label htmlFor="Message">Message</label><br/>
              <textarea name="Message" rows="3" cols="24"></textarea><br/>

              <input type="submit"/>

              <input type="reset"/>

            </form>

          </div>

          <div id="contact2">
            <h2 id="contactTitle">Contact Information</h2>
            <h3 id="contactItem">Email: maariyah614@gmail.com</h3>
            <h3 id="contactItem">Phone Number: (780) 864-9968</h3><br/>

            <h2 id="contactTitle">Location</h2>
            <h3 id="contactItem">Edmonton, Alberta</h3>
            <br/>

          </div>


        </div>
     

      </div>
    
    
    </>
  )
}
