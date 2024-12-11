import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { Model } from "./Model";

export default function Hero() {
  return (
    // the 3d model and the text in the hero section in one row
    <section id="Home" className="flex flex-row justify-between">
      <Canvas
        className="col-span-1 right-0 float-right mt-20"
        id="computer_model"
        shadows
        dpr={[1, 2]}
        camera={{ fov: 50 }}
        style={{ width: "50vh" }}
      >
        <Suspense fallback={null}>
          <Stage preset="rembrandt" intensity={1} environment="city">
            <Model />
          </Stage>
        </Suspense>
        <OrbitControls autoRotate />
      </Canvas>
      <div className="col-span-1 absolute top-60 left-20">
        <div className="blob"></div>
        <h1 className="text-5xl font-bold ">Hi, I'm Nada AbuIssa</h1>
        <div className="text-lg font-light relative top-28">
          <span>
            I'm a full-stack developer with a passion <br /> for creating
            beautiful and functional web applications.
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
