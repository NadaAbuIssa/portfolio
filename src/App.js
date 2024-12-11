// ⠀⠀⠀⠀⠀⢠⣒⣤⠤⣀⣀⠀
// ⠀⠀⠠⣒⢤⠋⠂⠈⡷⠒⠒⣗⠢⡀⠀⠀⠀⠀
// ⠀⢠⠋⠀⡇⠀⠀⣰⠁⠀⢀⡼⠠⣱⠀⠀⠀⠀
// ⠀⢈⠀⠀⣧⣀⣠⣏⢀⠴⠋⠉⠙⡟⡄⠀⠀⠀
// ⠀⠘⣄⢠⠟⠉⠉⢻⡎⠀⠀⠀⣸⠇⢸⠀⠀⠀
// ⠀⢀⠜⡏⠁⠀⠀⠀⣧⣀⣠⠾⠋⠀⡜⠀⠀⠀
// ⠀⡜⠀⠁⠀⠀⠀⠀⠘⣷⠀⠀⡠⠊⠀⠀⠀⠀
// ⠀⠹⣁⡤⢾⡀⠀⠀⢠⠏⠀⡐⠁⠀⠀⠀⠀⠀
// ⠀⠀⠃⢴⠀⠉⠒⠚⠃⠀⢠⠁⠀⠀⠀⠀⠀⠀
// ⠀⢸⠀⠈⠁⠀⠀⠀⠀⠀⡎⠀⠀⠀⠀⠀⠀⠀
// ⠀⢸⠀⠀⠀⠀⠀⠀⠀⢠⠁⠀⠀⠀⠀⠀⠀⠀
// ⠀⠸⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠤⠤⠤⠤⠤⠤⠤⠤⠀⠀⠀⠀⠀⠀⠀⠀
// 🐾
import React, { Suspense, useRef } from 'react'
import About from "./components/about";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Layout from "./layouts/layout";
import Hero from './components/Hero';
export default function Viewer() {
  const ref = useRef()
  return (
    <div style={{ height: '100vh' }}>
      <Layout>
        <Hero />
      <About />
      <Projects />
      <Skills />
      </Layout>
    </div>
    )
}







// fireflies click effect
console.clear();
let am = 22;

document.addEventListener("click", (e) => {
	let xx = e.pageX;
	let yy = e.pageY;

	for (let i = 0; i < am; i++) {
		createCircles(xx, yy, i);
	}
});

function createCircles(x, y, tuSam) {
	let firefly = document.createElement("firefly");

	document.body.appendChild(firefly);

	let size = Math.floor(Math.random() * 5);

	firefly.style.width = `${size}px`;
	firefly.style.height = `${size}px`;

	let destinationX = x + (Math.random() - 0.5) * tuSam * 20;
	let destinationY = y + (Math.random() - 0.5) * tuSam * 20;

	let roate = (Math.random() + 1) * tuSam * 20;

	let animation = firefly.animate(
		[
			{
				transform: `translate3d(${x - tuSam}px, ${y - tuSam}px, 0)`,
				opacity: 1,
				filter: `hue-rotate(${0}deg`
			},
			{
				transform: `translate3d(${destinationX - size}px, ${
					destinationY - size
				}px, 0) rotateZ(${roate}deg)  translateX(${tuSam}px)`,
				opacity: 0.5,
				filter: `hue-rotate(${160}deg`
			},
			{
				transform: `translate3d(${destinationX}px, ${destinationY}px, 0) rotateZ(${roate}deg)  translateX(${
					tuSam * 30
				}px)`,
				opacity: 0,
				filter: `hue-rotate(${60}deg`
			}
		],
		{
			duration: 10 + Math.random() * 4000,
			easing: "ease-out",

			delay: Math.random() * 200
		}
	);

	animation.onfinish = () => {
		firefly.remove();
	};
}





























