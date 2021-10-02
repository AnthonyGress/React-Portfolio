import React from "react";
import splashImg from "../images/minified/splash.jpeg";

const DigitalCard = () => {
  const shareBtn = document.querySelector(".shareBtn");
  const qrCode = document.querySelector(".qr-code");

  const toggleQr = () => {
    qrCode.classList.contains("d-none")
      ? qrCode.classList.remove("d-none")
      : qrCode.classList.add("d-none");
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Anthony's Card",
          url: "https://techxguy.com/digital-card",
          text: "This is Anthony's Digital Business Card. Let's Connect!",
        })
        .then(() => {
          console.log("Thanks for sharing!");
        })
        .catch(console.error);
    } else {
      // fallback
      toggleQr();
    }
  };

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
      />
      <link rel="stylesheet" href="./index.css" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <link
        rel="shortcut icon"
        href="img/favicon_io/apple-touch-icon-240x240.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="240x240"
        href="img/favicon_io/apple-touch-icon-240x240.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="240x240"
        href="img/favicon_io/apple-touch-icon-240x240.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="img/favicon_io/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="img/favicon_io/favicon-16x16.png"
      />
      <link rel="manifest" href="./manifest.json" />
      <link
        href="splashscreens/iphone5_splash.png"
        media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <link
        href="splashscreens/iphone6_splash.png"
        media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <link
        href="splashscreens/iphoneplus_splash.png"
        media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)"
        rel="apple-touch-startup-image"
      />
      <link
        href="splashscreens/iphoneplus_splash.png"
        media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3)"
        rel="apple-touch-startup-image"
      />
      <link
        href="splashscreens/iphonex_splash.png"
        media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
        rel="apple-touch-startup-image"
      />
      <link
        href="splashscreens/iphonexr_splash.png"
        media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <link
        href="splashscreens/iphonexsmax_splash.png"
        media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)"
        rel="apple-touch-startup-image"
      />
      <link
        href="splashscreens/ipad_splash.png"
        media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <link
        href="splashscreens/ipadpro1_splash.png"
        media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <link
        href="splashscreens/ipadpro3_splash.png"
        media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <link
        href="splashscreens/ipadpro2_splash.png"
        media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <meta
        name="apple-mobile-web-app-title"
        content="Anthony's Business Card"
      />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta property="og:site_name" content="Anthony's Business Card" />
      <meta
        property="og:title"
        content="Solving problems and teaching people skills to make their lives easier"
      />
      <meta property="og:type" content="website" />
      <meta
        name="description"
        content="I solve tech problems and teach people skills to make their lives easier"
      />
      <meta property="og:url" content="https://www.techxguy.com/digital-card" />
      <meta property="og:image" content="img/og-image.png" />
      <meta property="og:image:width" content="2200" />
      <meta property="og:image:height" content="840" />
      <title>Anthony's Business Card</title>
      <div className="bg-dark text-white">
        <header className="jumbotron display-4 text-center pt-4 hello">
          Hi, My Name is Anthony
        </header>
        <div className="text-center mt-2 tag">
          <h2>I Am a Full Stack Web Developer</h2>
        </div>
        <div className="text-center">
          <h2>This Is My Virtual Business Card</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card mx-auto mt-3 pb-3 mb-4 bg-light">
                <img
                  className="card-img-top card-image"
                  src={splashImg}
                  alt="background abstract image"
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
                        >
                          <i className="bi bi-linkedin"></i> LinkedIn
                        </a>
                        <a
                          href="https://github.com/techx-guy/"
                          className="btn btn-primary"
                          target="_blank"
                        >
                          <i className="bi bi-github"></i> GitHub
                        </a>
                      </div>
                      <div className="share">
                        <button
                          className="btn shareBtn"
                          onClick={() => handleShare()}
                        >
                          <i className="bi bi-box-arrow-up"></i>
                        </button>
                      </div>
                      <div className="bottom-row">
                        <a
                          href="mailto:?subject=Contact From Digital Business Card&body=Hi Anthony,"
                          className="btn btn-primary"
                          target="_blank"
                        >
                          <i className="bi bi-envelope-fill"></i> Email
                        </a>
                        <a
                          href="https://www.techxguy.com/"
                          className="btn btn-primary"
                          target="_blank"
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
        </div>
      </div>
    </>
  );
};

export default DigitalCard;
