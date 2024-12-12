export default function About() {
  return (
    <section id="About" className="h-[100dvh] bg-bkg-2">
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="text-6xl font-mono pd-8 tracking-tights text-white pb-8 leading-[45px] m-4">
          About
        </h1>
        <div className="text-center text-xl text-text max-w-[55rem] mt-5">
          <span className="mt-2 mb-3 text-3xl font-bold text-white animate-pulse">
            Hello, I&apos;m Nada AbuIssa 👋
          </span>
          <h3 className="mt-5 text-2xl text-accent font-roboto">Who Am I? </h3>
          <p className="mt-5 text-xl text-text">
            I am a motivated Computer Science student with a keen interest in
            data analysis. My practical experience and personal exploration have
            sparked my passion for data exploration, and I have also delved into
            full-stack development.
          </p>
          <h3 className="mt-5 text-2xl font-roboto text-accent">
            What Drives Me?
          </h3>
          <p className="mt-5 text-xl text-text ">
            I am passionate about harnessing the power of data to solve
            real-world challenges. I believe that technology has the potential
            to drive meaningful change, and I am eager to explore innovative
            solutions through data-driven insights.
          </p>
          <h3 className="mt-5 text-2xl font-roboto text-accent">
            Why Work With Me?
          </h3>
          <p className="mt-5 text-xl text-text">
            I am actively seeking internship opportunities where I can apply my
            skills, collaborate with talented teams, and contribute to impactful
            projects. As a dedicated Linux user, I thrive in open-source
            environments and am always eager to learn about the latest trends
            and tools in the field. I look forward to the opportunity to connect
            and explore potential collaborations.
          </p>
        </div>
      </div>
    </section>
  );
}
