import React from "react";
import "./styles.css";

const Home = () => {
  return (
    <div>
      <section id="home">
        <div className="col py-3 d-flex align-items-center " id="bg-home">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
                <div>
                  <h1 className="m-0 font-big slide-in-top text-light">Hi,</h1>
                  <h1 className="m-0 font-big animate-charcter text-light">
                    I'm Sreerag Parakkal,
                  </h1>
                  <p className="ls-2 mt-2 slide-in-bottom text-light">
                    Full Stack Developer specialized in mern stack
                  </p>
                </div>
              </div>

              <div className="col-lg-6 col-md-12 col-sm-12">
                <img
                  className="img-fluid"
                  src="../images/my-pic.png"
                  alt="error loading"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
