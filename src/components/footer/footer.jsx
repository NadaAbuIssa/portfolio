import React, { useEffect } from "react";

const cat = `${process.env.PUBLIC_URL}/assets/catp1.png`;

export default function Footer() {
  useEffect(() => {
    const Pupils = document.getElementsByClassName("footer-pupil");
    const pupilsArr = Array.from(Pupils);

    let pupilStartPoint = -10;
    let pupilRangeX = 20;
    let pupilRangeY = 15;

    // mouse X
    let mouseXStartPoint = 0;
    let mouseXEndPoint = window.innerWidth;
    let currentXPosition = 0;
    let fracXValue = 0;

    // mouse Y position
    let mouseYEndPoint = window.innerHeight;
    let currentYPosition = 0;
    let fracYValue = 0;

    let mouseXRange = mouseXEndPoint - mouseXStartPoint;

    const mouseMove = (event) => {
      currentXPosition = event.clientX - mouseXStartPoint;
      fracXValue = currentXPosition / mouseXRange;

      currentYPosition = event.clientY;
      fracYValue = currentYPosition / mouseYEndPoint;

      // footer
      let pupilXCurrrentPosition = pupilStartPoint + fracXValue * pupilRangeX;
      let pupilYCurrrentPosition = pupilStartPoint + fracYValue * pupilRangeY;

      // footer
      pupilsArr.forEach((curPupil) => {
        curPupil.style.transform = `translate(${pupilXCurrrentPosition}px, ${pupilYCurrrentPosition}px)`;
      });
    };

    const windowResize = () => {
      mouseXEndPoint = window.innerWidth;
      mouseYEndPoint = window.innerHeight;
      mouseXRange = mouseXEndPoint - mouseXStartPoint;
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("resize", windowResize);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("resize", windowResize);
    };
  }, []);

  return (
    <footer id="Footer" className="bg-bkg-2">
      <div className="footer-background">
        <div className="footer-blob container sm md"></div>
      </div>
      <div className="footer-foreground">
        <div className="footercontainer">
          <div className="text-xl flex justify-center">
            <article tabIndex="0" aria-label="Garbage in 🧠 Garbage out">
              "Garbage in 🧠 Garbage out"
            </article>
          </div>
          <div className="footer-avatar-container">
            <img
              src={cat}
              alt="animation-head"
              className="footer-avatar-img"
              id="footer-wala-avatar"
            />
            <div className="footer-avatar-face">
              <div className="footer-avatar-eye footer-left-eye">
                <div className="footer-pupil"></div>
              </div>
              <div className="footer-avatar-eye footer-right-eye">
                <div className="footer-pupil"></div>
              </div>
            </div>
          </div>
          <div className="footer-text">
            <p className="text-lg text-center">
              Made with ❤️ by{" "}
              <a
                href="http://github.com/nadaabuissa"
                target="_blank"
                rel="noreferrer"
              >
                Nada AbuIssa
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
