import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="text-center text-white bg-primary" id="top-footer">
        <div className="container pt-4">
          <section className="mb-4">
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://www.facebook.com/sreerag.sree.7524879/"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://twitter.com/SreeragParakkal"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://www.instagram.com/_sreerag_p_nair_/"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://www.linkedin.com/in/sreerag-p-584604169/"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://github.com/Sreerag-Parakkal"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>
        </div>
        <div
          className="text-center text-dark p-3" id="base-footer">
          © 2020 Copyright:Sreerag Parakkal
        </div>
      </footer>
    </div>
  );
};

export default Footer;
