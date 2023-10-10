import React from "react";
import {
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";
import "./styles.css";

const Skills = () => {
  return (
    <div>
      <section id="skills">
        <div className="col py-3 d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
                <div>
                  <h1 className="font-big text-red slide-in-top">
                    Technologies I know
                  </h1>
                  <hr></hr>

                  <div className="row my-2">
                    <div
                      className="mx-2 my-3 border rounded py-1 px-2 mw-fc"
                      id="skill-row"
                    >
                      <span>
                        <SiJavascript className="fs-4" /> JavaScript
                      </span>
                    </div>
                    <div
                      className="mx-2 my-3 border rounded py-1 px-2 mw-fc"
                      id="skill-row"
                    >
                      <span>
                        <SiReact className="fs-4" /> React
                      </span>
                    </div>
                    <div
                      className="mx-2 my-3 border rounded py-1 px-2 mw-fc"
                      id="skill-row"
                    >
                      <span>
                        <SiHtml5 className="fs-4" /> Html
                      </span>
                    </div>
                    <div
                      className="mx-2 my-3 border rounded py-1 px-2 mw-fc"
                      id="skill-row"
                    >
                      <span>
                        <SiCss3 className="fs-4" /> Css
                      </span>
                    </div>
                    <div
                      className="mx-2 my-3 border rounded py-1 px-2 mw-fc"
                      id="skill-row"
                    >
                      <span>
                        <SiBootstrap className="fs-4" /> Bootstrap
                      </span>
                    </div>
                    <div
                      className="mx-2 my-3 border rounded py-1 px-2 mw-fc"
                      id="skill-row"
                    >
                      <span>
                        <SiMongodb className="fs-4" /> MongoDB
                      </span>
                    </div>
                    <div
                      className="mx-2 my-3 border rounded py-1 px-2 mw-fc"
                      id="skill-row"
                    >
                      <span>
                        <SiNodedotjs className="fs-4" /> Node.js
                      </span>
                    </div>
                    <div
                      className="mx-2 my-3 border rounded py-1 px-2 mw-fc"
                      id="skill-row"
                    >
                      <span>
                        <SiExpress className="fs-4" /> ExpressJS
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <img
                  className="img-fluid"
                  src="../images/Development-pana.png"
                  alt="..."
                ></img>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
