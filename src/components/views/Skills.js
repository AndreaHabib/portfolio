import React from "react";
import "./styles/skills.css";
import AOS from "aos";
import "aos/dist/aos.css";
import frontend from "./frontend.svg";
import backend from "./backend.svg";
import os from "./os.svg";
import databases from "./databases.svg";
import editor from "./editor.svg";
import tools from "./tools.svg";
// ..
AOS.init();

function Skills() {
  return (
    <section className="skills">
      <div
        data-aos="fade-up"
        data-aos-delay="20"
        data-aos-duration="300"
        data-aos-easing="ease-in-out"
        className="container"
      >
        <div className="heading">
          <h2
            style={{
              padding: "1.3rem",
              textAlign: "center",
            }}
          >
            SKILLS
          </h2>
        </div>
        <span className="skills">
          <div className="box">
            <h4>Frontend</h4>
            <img alt="frontend" className="illus" src={frontend} />
            <br></br>
            <br></br>
            <span>
              <img
                alt="HTML5"
                src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
              />
              <img
                alt="CSS3"
                src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
              />
              <img
                alt="Swift"
                src="https://img.shields.io/badge/swift-%23FA7343.svg?style=for-the-badge&logo=swift&logoColor=white"
              />
              <img
                alt="React"
                src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
              />
              <img
                alt="Bootstrap"
                src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white"
              />
              <img
                alt="Redux"
                src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white"
              />
              <br></br>
              <hr></hr>
            </span>
          </div>
          <div className="box">
            <h4>Backend</h4>
            <img alt="backend" className="illus" src={backend} />
            <br></br>
            <br></br>
            <img
              alt="Django"
              src="https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white"
            />
            <img
              alt="NodeJS"
              src="https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node-dot-js&logoColor=white"
            />
            <img
              alt="Express.js"
              src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"
            />
            <img
              alt="JavaScript"
              src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
            />
            <img
              alt="Python"
              src="https://img.shields.io/badge/python-%2314354C.svg?style=for-the-badge&logo=python&logoColor=white"
            />
            <img
              alt="C++"
              src="https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white"
            />
            <img
              alt="Java"
              src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white"
            />
            <img
              alt="PHP"
              src="https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white"
            />
            <img
              alt="Ruby"
              src="https://img.shields.io/badge/ruby-%23CC342D.svg?style=for-the-badge&logo=ruby&logoColor=white"
            />
            <img
              alt="Rails"
              src="https://img.shields.io/badge/rails-%23CC0000.svg?style=for-the-badge&logo=ruby-on-rails&logoColor=white"
            />
            <img
              alt="GraphQL"
              src="https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql"
            />
            <br></br>
            <hr></hr>
          </div>
          <div className="box">
            <h4>Databases</h4>
            <img alt="databases" className="illus" src={databases} />
            <br></br>
            <br></br>
            <img
              alt="MySQL"
              src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white"
            />
            <img
              alt="Postgres"
              src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white"
            />
            <img
              alt="MongoDB"
              src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"
            />
            <img
              alt="Apache"
              src="https://img.shields.io/badge/apache-%23D42029.svg?style=for-the-badge&logo=apache&logoColor=white"
            />
            <img
              alt="Heroku"
              src="https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white"
            />
            <br></br>
            <hr></hr>
          </div>
        </span>
        <br></br>
        <span className="skills">
          <div className="box">
            <h4>Text Editors and IDEs</h4>
            <img alt="editors" className="illus" src={editor} />
            <br></br>
            <br></br>
            <img
              alt="Visual Studio Code"
              src="https://img.shields.io/badge/VisualStudioCode-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white"
            />
            <img
              alt="Visual Studio"
              src="https://img.shields.io/badge/VisualStudio-5C2D91.svg?style=for-the-badge&logo=visual-studio&logoColor=white"
            />
            <img
              alt="Xcode"
              src="https://img.shields.io/badge/Xcode-007ACC?style=for-the-badge&logo=Xcode&logoColor=white"
            />
            <img
              alt="IntelliJ IDEA"
              src="https://img.shields.io/badge/IntelliJIDEA-000000.svg?style=for-the-badge&logo=intellij-idea&logoColor=white"
            />
            <img
              alt="Vim"
              src="https://img.shields.io/badge/VIM-%2311AB00.svg?style=for-the-badge&logo=vim&logoColor=white"
            />
            <br></br>
            <hr></hr>
          </div>
          <div className="box">
            <h4>Operating Systems</h4>
            <img alt="os" className="illus" src={os} />
            <br></br>
            <br></br>
            <img
              alt="Ubuntu"
              src="https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white"
            />
            <img
              alt="Windows 10"
              src="https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white"
            />
            <img
              alt="Android"
              src="https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white"
            />
            <img
              alt="Linux"
              src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black"
            />
            <br></br>
            <hr></hr>
          </div>
          <div className="box">
            <h4>Others/Tools</h4>
            <img alt="tools" className="illus" src={tools} />
            <br></br>
            <br></br>
            <img
              alt="Figma"
              src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white"
            />
            <img
              alt="Canva"
              src="https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white"
            />
            <img
              alt="Git"
              src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"
            />
            <img
              alt="GitHub"
              src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"
            />
            <img
              alt="Heroku"
              src="https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white"
            />
            <img
              alt="Trello"
              src="https://img.shields.io/badge/Trello-%23026AA7.svg?style=for-the-badge&logo=Trello&logoColor=white"
            />
            <img
              alt="Postman"
              src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=red"
            />
            <img
              alt="Markdown"
              src="https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white"
            />
            <br></br>
            <hr></hr>
          </div>
        </span>
      </div>
    </section>
  );
}

export default Skills;
