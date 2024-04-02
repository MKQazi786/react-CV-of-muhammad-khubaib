import React from "react";
import ReactDOM from "react-dom";
import "./style.css"
import DP from "./DP.jpg"
import { Github, Linkedin, Facebook, Youtube } from 'react-bootstrap-icons';
function Header() {
  return (
    <div>
      <header>
        <img src={DP} width={150} alt="this is DP of CV" />
        <div>
          <h1>Frontend developer</h1>
          <h2>Muhammad Khubaib</h2>
          <h3>Address: <a href="https://goo.gl/maps/JmgvPsccbJvkdUue6">FB area karachi</a></h3>
          <h3>CONTACT NO: <a href="tel:03116554647"> 03116554647 </a></h3>
        </div>
      </header>
      <div className="flex">
        <aside>

          <h2>OBJECTIVE:</h2>
          <p>
            Passionate and dedicated web developer with a strong foundation in HTML, CSS, JavaScript, and Express.js, encompassing approximately 70% proficiency. Equipped with a burgeoning understanding of React.js, currently at a 40-50% competency level. Eager to leverage and expand upon my skills in a dynamic environment where I can contribute to innovative projects, collaborate with talented teams, and further enhance my expertise in web development. Seeking opportunities to apply my knowledge and enthusiasm to create impactful digital experiences while continuously learning and growing within the field.
            <hr />
          </p>

          <h1>CONTACT:</h1>
          <a href="https://www.github.com/MKQazi786"><Github /> https://github.com/MKQazi786</a> <br />
          <a href="https://www.linkedin.com/in/muhammad-khubaib-mkqazi786/"><Linkedin /> https://www.linkedin.com/in/ muhammad-khubaib-mkqazi786/</a> <br />
          <a href="https://www.facebook.com/MKQazi786"> <Facebook /> https://www.facebook.com /MKQazi786 </a> <br />
          <a href="https://www.youtube.com/@MKQazi786"> <Youtube /> https://www.youtube.com /@MKQazi786 </a>
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
              <li>01 month remote internship as a Web Developer at CodSoft </li>
              <li>01 month remote internship at Grow Intern</li>
              <li>01 year experience as a frontend developer</li>
              <li>1.5 year's Experience as a Merchandiser in Mondelez pvt ltd</li>
              <li>04 year's Experience as a salesman </li>
              <li>01 year Experience as a Home Teacher</li>
            </ul>

            <hr />

          </div>



          <div>

            <h2>QUALIFICATION:</h2>

            <ul>
              <li>Matriculation From BSEK (Board Of Secondary Education) Karachi </li>
              <li>Intermediate From BIEK (Board Of Intermediate Education) Karachi </li>
              <li>Web and App Development From SMIT (Saylani Mass IT Training) Karachi</li>
              <li>Now BSc (In progress) From KU (Karachi University)</li>
            </ul>

            <hr />

          </div>

          <div>

            <h2>SKILLS:</h2>

            <ul>
              <li>HTML5 (Hyper Text Markup Language 5)</li>
              <li>CSS3 (Cascading Style Sheet 3)</li>
              <li>Bootstrap</li>
              <li>Javascript es6 (ECMA script 6)</li>
              <li>Firebase (Auth) </li>
              <li>Mongodb</li>
              <li>Express</li>
              <li>React.js</li>
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