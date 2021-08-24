const BusinessCard = () => {
  return (
    <div onclick="" className="bg-dark text-white">
      <header className="jumbotron display-4 text-center pt-4 hello">
        Hi, My Name is Anthony
      </header>
      <div className="text-center mt-2 tag">
        <h2>I Am a Full Stack Web Developer</h2>
      </div>
      <div className="text-center">
        <h2>This Is My Virtual Business Card</h2>
      </div>
      <main className="container">
        <div className="row">
          <div className="col-12">
            <div className="card mx-auto mt-3 pb-3 mb-4 bg-light">
              <img
                className="card-img-top card-image"
                src="./img/splash.jpeg"
                alt="background abstract"
              />
              <div className="card-body bg-light">
                <h5 className="card-title text-center text-dark pb-3 mt-1">
                  Let's Connect!
                </h5>
                <div className="card-text text-center">
                  <div className="btn-wrapper">
                    <div className="top-row">
                      <a
                        href="https://www.linkedin.com/in/anthony-gress/"
                        className="btn btn-primary"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bi bi-linkedin"></i> LinkedIn
                      </a>
                      <a
                        href="https://github.com/techx-guy/"
                        className="btn btn-primary"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bi bi-github"></i> GitHub
                      </a>
                    </div>
                    <div className="share">
                      <button className="btn shareBtn">
                        <i className="bi bi-box-arrow-up"></i>
                      </button>
                    </div>
                    <div className="bottom-row">
                      <a
                        href="mailto:?subject=Contact From Digital Business Card&body=Hi Anthony,"
                        className="btn btn-primary"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bi bi-envelope-fill"></i> Email
                      </a>
                      <a
                        href="https://www.techxguy.com/"
                        className="btn btn-primary"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bi bi-globe2"></i> Website
                      </a>
                    </div>
                  </div>
                  <div className="mt-5">
                    <img
                      className="img-fluid qr-code"
                      src="https://api.qrserver.com/v1/create-qr-code/?data=https://techxguy.com/digital-card&amp;size=150x150"
                      alt="website qr code"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <script src="../assets/js/card.js"></script> */}
    </div>
  );
};

export default BusinessCard;
