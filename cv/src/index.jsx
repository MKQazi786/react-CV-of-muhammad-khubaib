import React from "react";
import ReactDOM from "react-dom";
import "./style.css"
import DP from "./DP.jpg"
function Header() {
  return (
    <div>
      <header>
        <img src={DP} width={150} alt="this is DP of CV" />
        <div>
        <h1> CV curriculum vitae</h1> 
        <h2>Muhammad Khubaib</h2>
        {/* <h3>ADDRESS: F.B AREA KARACHI</h3>
        <h3>CONTACT NO:03116554647</h3> */}
        </div>
      </header>

      <hr />

      <h2>OBJECTIVE</h2>
      <p>
        To serve in progressive organization offering job satisfaction a challenging work environment
        with vast opportunities for career development based upon achievement and result
      </p>

      <hr />

      <h2>ABOUT ME</h2>
      <p>
        Father Name: Abdul Waheed
        <br />
        Religion: Islam
        <br />
        Nationality: Pakistani
        <br />
        CNIC: *****-*******-*
        <br />
        Date of birth: 26-june-2005
        <br />
        Marital Status: Single
        <br />
        Language Skills: Urdu, English & Hindi
        <br />
      </p>
      <hr />

      <h2>EXPERIENCE</h2>
      
      <ul>
        <li>01 year Experience as a Merchandiser in Mondelez pvt ltd</li>
        <li>04 year's Experience as a salesman </li>
        <li>01 year Experience as a Home Teacher</li>
      </ul>
      
      <hr/>
        
        <h2>QUALIFICATION</h2>
        
        <ul>
          <li>Matriculation From Karachi Board Education </li>
          <li>Intermediate From Karachi Board Education </li>
          <li>Student of SMIT web and app Development</li>
        </ul>
        
        <hr/>
        
        <h2>SKILLS</h2>
        
        <ul>
          <li>HTML5 (Hyper Text Multiple Language 5)</li>
          <li>CSS3 (Cascading Style Sheet 3)</li>
          <li>Bootstrap</li>
          <li>Javascript es6 (ECMA script 6)</li>
          <li>Firebase</li>
          <li>Mongodb</li>
          <li>Express</li>
          <li>React</li>
          <li>Node.js</li>
        </ul>
        
        <hr/>
        
          <h2>AWARDS AND ACKNOWLEDGEMENTS</h2> 
          
          <hr/>

            <ul>
              <li>Will be furnished upon request</li>
            </ul>
        </div>
 );
}

ReactDOM.render(<Header />, document.querySelector('#root'))