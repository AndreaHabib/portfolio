import React from "react";
import "./styles/skills.css";
import SkillCard from "../containers/SkillCard";
import AOS from "aos";
import "aos/dist/aos.css";
// ..
AOS.init();

function Skills() {
  const frontend_badges = {
    html5:
      "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
    css3: "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
    swift:
      "https://img.shields.io/badge/swift-%23FA7343.svg?style=for-the-badge&logo=swift&logoColor=white",
    react:
      "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
    bootstrap:
      "https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white",
    redux:
      "https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white",
  };
  const backend_badges = {
    django:
      "https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white",
    nodejs:
      "https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node-dot-js&logoColor=white",
    express:
      "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB",
    javascript:
      "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
    python:
      "https://img.shields.io/badge/python-%2314354C.svg?style=for-the-badge&logo=python&logoColor=white",
    cplusplus:
      "https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white",
    java: "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white",
    php: "https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white",
    ruby: "https://img.shields.io/badge/ruby-%23CC342D.svg?style=for-the-badge&logo=ruby&logoColor=white",
    rails:
      "https://img.shields.io/badge/rails-%23CC0000.svg?style=for-the-badge&logo=ruby-on-rails&logoColor=white",
    graphql:
      "https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql",
  };
  const databases_badges = {
    mysql:
      "https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white",
    postgres:
      "https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white",
    mongodb:
      "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
    apache:
      "https://img.shields.io/badge/apache-%23D42029.svg?style=for-the-badge&logo=apache&logoColor=white",
    heroku:
      "https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white",
  };
  const texteditors_badges = {
    VisualStudioCode:
      "https://img.shields.io/badge/VisualStudioCode-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white",
    VisualStudio:
      "https://img.shields.io/badge/VisualStudio-5C2D91.svg?style=for-the-badge&logo=visual-studio&logoColor=white",
    Xcode:
      "https://img.shields.io/badge/Xcode-007ACC?style=for-the-badge&logo=Xcode&logoColor=white",
    IntelliJIDEA:
      "https://img.shields.io/badge/IntelliJIDEA-000000.svg?style=for-the-badge&logo=intellij-idea&logoColor=white",
    Vim: "https://img.shields.io/badge/VIM-%2311AB00.svg?style=for-the-badge&logo=vim&logoColor=white",
  };
  const os_badges = {
    ubuntu:
      "https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white",
    windows10:
      "https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white",
    android:
      "https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white",
    linux:
      "https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black",
  };
  const tools_badges = {
    figma:
      "https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white",
    canva:
      "https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white",
    git: "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white",
    github:
      "https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white",
    trello:
      "https://img.shields.io/badge/Trello-%23026AA7.svg?style=for-the-badge&logo=Trello&logoColor=white",
    postman:
      "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=red",
    markdown:
      "https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white",
  };

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
          <SkillCard
            title="Frontend"
            alt_illus="frontend"
            illus="https://res.cloudinary.com/andreahabib/image/upload/v1627079886/frontend_xqwylm.svg"
            badges={frontend_badges}
          />
          <SkillCard
            title="Backend"
            alt_illus="backend"
            illus="https://res.cloudinary.com/andreahabib/image/upload/v1627079887/backend_poqzuc.svg"
            badges={backend_badges}
          />
          <SkillCard
            title="Databses"
            alt_illus="databases"
            illus="https://res.cloudinary.com/andreahabib/image/upload/v1627079886/databases_uvqgga.svg"
            badges={databases_badges}
          />
        </span>
        <br></br>
        <span className="skills">
          <SkillCard
            title="Text Editors and IDE"
            alt_illus="editors"
            illus="https://res.cloudinary.com/andreahabib/image/upload/v1627079887/editor_m9mijf.svg"
            badges={texteditors_badges}
          />
          <SkillCard
            title="Operating Systems"
            alt_illus="os"
            illus="https://res.cloudinary.com/andreahabib/image/upload/v1627079886/os_qvsrtp.svg"
            badges={os_badges}
          />
          <SkillCard
            title="Others/Tools"
            alt_illus="tools"
            illus="https://res.cloudinary.com/andreahabib/image/upload/v1627079886/tools_gdo28k.svg"
            badges={tools_badges}
          />
        </span>
      </div>
    </section>
  );
}

export default Skills;
