import React from "react";

const About = () => {
  return (
    <div>
      <section id="about">
        <div className="col py-3 d-flex align-items-center about-image">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
                <div>
                  <h1 className="font-big text-red slide-in-top">About me</h1>
                  <hr></hr>
                  <p className="slide-in-bottom">
                    Ambitious full-stack developer, a self-led learner and team
                    player <br></br>
                  </p>
                  <p className="slide-in-bottom">
                    I have experience working with HTML, CSS, JavaScript, and
                    jQuery, and I'm proficient in using Bootstrap and React.js.
                    <br></br>
                  </p>
                  <p className="slide-in-bottom">
                    I'm a quick learner and enjoy solving problems through
                    coding. I'm passionate about building user-friendly websites
                    that are visually appealing and accessible to all users. I'm
                    eager to continue learning and improving my skills as a web
                    developer.
                  </p>
                  <p className="slide-in-bottom">
                    Currently Learning React Js Library
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <img
                  className="img-fluid"
                  src="../images/nomad-amico.png"
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

export default About;
