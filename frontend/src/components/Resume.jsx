import React from "react";

const Resume = () => {
  return (
    <div>
      <section id="resume">
        <div className="col p-4">
          <div className="p-4 slide-in-top">
            <div className="row ">
              <div className="text-center">
                <h2 className="ff-jose fw-bold ls-2 ">
                  Resume - Sreerag Parakkal
                </h2>
              </div>
            </div>
            <hr></hr>
            <div className="row">
              <div className="col-md-6">
                <h4 className="ff-jose ls-2">EDUCATION</h4>
                <ul>
                  <li>
                    <h4 className="ff-jose my-1 text-red">
                      Diploma In Electronics Engineering
                    </h4>
                    <h6 className="blue-label px-2 py-1">2016-2019</h6>
                    <p className="m-0">Govt. Polytechnic College chelakkara</p>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <h4 className="ff-jose ls-2">COURSES</h4>
                <ul>
                  <li>
                    <h4 className="ff-jose my-1 text-red">
                      Full Stack Developer
                    </h4>
                    <h6 className="blue-label px-2 py-1">2022-2023</h6>
                    <p className="m-0">Entri Elevate</p>
                  </li>
                </ul>
              </div>
            </div>
            <hr></hr>
            <hr></hr>
            <div className="row">
              <div className="col-md-12 ">
                <h4 className="ff-jose ls-2">COURSES</h4>
                <ul>
                  <li>
                    <h4 className="ff-jose my-1 text-red">
                      Meta Front End Developer
                    </h4>
                    <h6 className="blue-label px-2 py-1">2022-2022</h6>
                    <p className="m-0">
                      Online Course offered by Facebook and Meta{" "}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <hr></hr>
            <br />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
