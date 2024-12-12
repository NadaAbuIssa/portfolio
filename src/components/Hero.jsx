import React from "react";
export default function Hero() {
  const imagePath = `${process.env.PUBLIC_URL}/assets/Animation.gif`;
  return (
    <section id="Home" className="flex flex-row justify-between">
      <img
        src={imagePath}
        alt="a cat"
        className="absolute col-span-1 float-right mt-20"
        style={{ width: "50vh", left: "60%" }}
      />
      <div className="col-span-1 absolute top-60 left-20">
        <div className="blob"></div>
        <h1 className="text-5xl font-bold ">Hi, I'm Nada AbuIssa</h1>
        <div
          className="text-lg font-light relative top-28 left-25"
          style={{ left: "10%" }}
        >
          <span>
            I'm a CS Student with a passion <br /> for creating beautiful and
            functional Softwear apps.
          </span>
          <p>
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
