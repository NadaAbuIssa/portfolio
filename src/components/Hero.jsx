import React from "react";
export default function Hero() {
  const imagePath = `${process.env.PUBLIC_URL}/assets/Animation.gif`;
  return (
    <section
      id="Home"
      className="flex flex-col md:flex-row justify-between mx-auto p-4"
    >
      <img
        src={imagePath}
        alt="a cat"
        className="relative mx-auto mt-10 md:mt-20 md:absolute md:right-0 md:mt-40 md:mr-10"
        style={{ width: "50vh", maxWidth: "100%" }}
      />
      <div className="relative mt-10 md:mt-0 md:absolute md:top-60 md:left-20">
        <div className="blob"></div>
        <h1
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center md:text-left "
          style={{ top: "5%" }}
        >
          Hi, I'm Nada AbuIssa
        </h1>
        <div
          className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-light relative mt-5 md:mt-28 text-center md:text-left"
          style={{ left: "10%", maxWidth: "90%" }}
        >
          <span>
            I'm a CS Student with a passion <br /> for creating beautiful and
            functional software apps.
          </span>
          <p className="mt-4">
            I'm currently looking for new opportunities <br />
            to work on exciting projects.
          </p>
        </div>
      </div>
    </section>
  );
}

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const blob = document.querySelector(".blob");
  blob.style.transform = `translateY(${scrollPosition * 0.5}px)`;
});
