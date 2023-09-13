import "./App.css";

import { useState } from "react";

import typescript from "../public/stacks/typescript.png";
import react from "../public/stacks/react.png";
import nodejs from "../public/stacks/nodejs.png";
import mongodb from "../public/stacks/mongodb.png";
import postsql from "../public/stacks/postsql.png";
import github from "../public/stacks/github.png";
import linkedin from "../public/stacks/linkedin.png";
import medium from "../public/stacks/medium.png";
import site from "../public/stacks/site.png";
import rep from "../public/stacks/rep.png";
import right from "../public/stacks/right.png";
import left from "../public/stacks/left.png";
import curriculum from "../public/stacks/curriculum.png";
import gmail from "../public/stacks/gmail.png";
import phone from "../public/stacks/phone.png";

import { PlayerProject } from "./Components/Player/Player";

const projects = [
  {
    urlSite: "https://streamcinemavault-2f7be.web.app/",
    repository: "https://github.com/pedrjose/cinemavault",
    urlVideo: "https://www.youtube.com/watch?v=TTg2_pjAGfU",
  },
  {
    urlSite: "https://earth-1-b0220.web.app/",
    repository: "https://github.com/pedrjose/project-earth1",
    urlVideo: "https://www.youtube.com/watch?v=uVK8dkDdAAk",
  },
];

function App() {
  const [index, setIndex] = useState(0);

  const loadProjects = (button) => {
    if (button === 1) {
      setIndex((prevState) => prevState + 1);
    }

    if (button === 0) {
      setIndex((prevState) => prevState - 1);
    }
  };
  return (
    <>
      <section className="section-settings">
        <div className="navbar">
          <span className="my-medias">
            <a href="https://github.com/pedrjose" target="_blank">
              <img className="my-medias-img" src={github} />
            </a>
            <a href="https://www.linkedin.com/in/pedrojosel/" target="_blank">
              <img className="my-medias-img" src={linkedin} />
            </a>
            <a href="https://medium.com/@devtomorrow" target="_blank">
              <img className="my-medias-img" src={medium} />
            </a>
            <a
              href="https://drive.google.com/file/d/1Ut4imUQUn-I1TsOnb_RGh6r_o8XiQxi-/view?usp=sharing"
              target="_blank"
            >
              <img className="my-medias-img" src={curriculum} />
            </a>
          </span>
        </div>
        <h1 className="h1-settings">Pedro Lima </h1>
        <h2 className="h2-settings">
          Desenvolvedor Full Stack & Estudante de Computação
        </h2>
        <span className="stacks-box">
          <img className="stack-img" src={typescript} />
          <img className="stack-img" src={nodejs} />
          <img className="stack-img" src={react} />
          <img className="stack-img" src={postsql} />
          <img className="stack-img" src={mongodb} />
        </span>
      </section>
      <section className="section2-settings">
        <div className="navbar">
          <span className="my-medias">
            <a href="https://github.com/pedrjose" target="_blank">
              <img className="my-medias-img" src={github} />
            </a>
            <a href="https://www.linkedin.com/in/pedrojosel/" target="_blank">
              <img className="my-medias-img" src={linkedin} />
            </a>
            <a href="https://medium.com/@devtomorrow" target="_blank">
              <img className="my-medias-img" src={medium} />
            </a>
            <a
              href="https://drive.google.com/file/d/1Ut4imUQUn-I1TsOnb_RGh6r_o8XiQxi-/view?usp=sharing"
              target="_blank"
            >
              <img className="my-medias-img" src={curriculum} />
            </a>
          </span>
        </div>
        <span className="my-medias-projects">
          {index > 0 ? (
            <button
              onClick={() => loadProjects(0)}
              className="reset-button-style"
            >
              <img src={left} className="img-button" />
            </button>
          ) : null}
          <PlayerProject props={projects[index]} />
          {index < projects.length - 1 ? (
            <button
              onClick={() => loadProjects(1)}
              className="reset-button-style"
            >
              <img src={right} className="img-button" />
            </button>
          ) : null}
        </span>
        <span className="my-medias-projects">
          <a href={projects[index].urlSite} target="_blank">
            <img className="my-medias-projects-img" src={site} />
          </a>
          <a href={projects[index].repository} target="_blank">
            <img className="my-medias-projects-img" src={rep} />
          </a>
        </span>
      </section>
      <div className="under">
        <img src={gmail} className="email-img" />
        <h6>pedrlimadev@gmail.com</h6>
      </div>
    </>
  );
}

export default App;
