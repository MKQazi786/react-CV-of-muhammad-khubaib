import React from "react";
import ReactDOM from "react-dom";
import "./style.css"
import DP from "./DP.jpg"
import { Github ,Linkedin,Facebook,Youtube  } from 'react-bootstrap-icons';
function Header() {
  return (
        <div>
    <header>
        <img src={DP} width={150} alt="this is DP of CV" />
        <div>
          <h1> CV curriculum vitae</h1>
          <h2>Muhammad Khubaib</h2>
          <h3><a href="https://goo.gl/maps/JmgvPsccbJvkdUue6">Address: FB area karachi</a></h3>
          <h3>CONTACT NO: <a href="tel:03116554647"> 03116554647 </a></h3>
        </div>
      </header>
      <div className="flex">
        <aside>

          <h2>OBJECTIVE:</h2>
          <p>
            To serve in progressive organization offering job satisfaction a challenging work environment
            with vast opportunities for career development based upon achievement and result 
            <hr />
          </p>

          <h1>CONTACT:</h1>
          <a href="https://www.github.com/MKQazi786"><Github /> https://github.com/ MKQazi786</a> <br />
          <a href="https://www.linkedin.com/in/muhammad-khubaib-mkqazi786/"><Linkedin /> https://www.linkedin.com/in/ muhammad-khubaib-mkqazi786/</a> <br />
          <a href="https://www.facebook.com/MKQazi786"> <Facebook /> https://www.facebook.com /MKQazi786 </a> <br />
          <a href="https://www.youtube.com/channel/UC3sNX6qh9eLGRHAc3Uo5fUQ"> <Youtube /> https://www.youtube.com/ channel/UC3sNX6qh9eLGRHAc3Uo5fUQ </a>

        </aside>

        <br />
        <div />

          <main>
            <div>
              <h2>ABOUT ME:</h2>
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
            </div>


            <div>

              <h2>EXPERIENCE:</h2>

              <ul>
                <li>01 year Experience as a Merchandiser in Mondelez pvt ltd</li>
                <li>04 year's Experience as a salesman </li>
                <li>01 year Experience as a Home Teacher</li>
              </ul>

              <hr />

            </div>



            <div>

              <h2>QUALIFICATION:</h2>

              <ul>
                <li>Matriculation From Karachi Board Education </li>
                <li>Intermediate From Karachi Board Education </li>
                <li>Web and App Development From SMIT Karachi</li>
              </ul>

              <hr />

            </div>

            <div>

              <h2>SKILLS:</h2>

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

            </div>
            <hr />

            <div>

              <h2>AWARDS AND ACKNOWLEDGEMENTS:</h2>

              <hr />

              <ul>
                <li>Will be furnished upon request</li>
              </ul>
            </div>
          </main>
        </div>
      </div>
      );
}

      ReactDOM.render(<Header />, document.querySelector('#root'))