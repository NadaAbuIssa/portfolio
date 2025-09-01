export default function About() {
  return (
    <section
      id="About"
      className="min-h-screen bg-bkg-2 flex flex-col justify-center items-center px-6 py-12"
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-accent mb-12 tracking-tight">
        About Me 🐾
      </h1>

      <div className="max-w-5xl grid md:grid-cols-2 gap-10">
        {/* Left side - personal intro */}
        <div className="bg-bkg-1 rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Hi, I&apos;m Nada AbuIssa 🐱
          </h2>
          <p className="text-text text-lg leading-relaxed">
            I like building websites that feel alive and exploring how data can tell stories. Coding for me is a mix of solving puzzles and being creative. And yes—cats are always part of the process, usually sitting next to me or pressing random keys 🐾.
          </p>
        </div>

        {/* Right side - drives & passion */}
        <div className="bg-bkg-1 rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold text-white mb-4">
            What Inspires Me?
          </h2>
          <p className="text-text text-lg leading-relaxed">
            I believe technology can create positive impact when paired with{" "}
            <span className="text-accent font-medium">curiosity</span> and{" "}
            <span className="text-accent font-medium">creativity</span>.  
            Exploring how data can tell stories and how websites can bring ideas
            to life keeps me motivated every day.
          </p>
        </div>

        {/* Left side - skills */}
        <div className="bg-bkg-1 rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold text-white mb-4">
            My Toolkit 🐾
          </h2>
          <p className="text-text text-lg leading-relaxed">
            From <span className="text-accent">full-stack web apps</span> to{" "}
            <span className="text-accent">data analysis</span>,  
            I enjoy working with modern tools and learning new ones every week.
            As a Linux user, I thrive in open-source spaces and love building
            things from scratch.
          </p>
        </div>

        {/* Right side - opportunities */}
        <div className="bg-bkg-1 rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Let&apos;s Collaborate
          </h2>
          <p className="text-text text-lg leading-relaxed">
            I&apos;m excited to join teams where I can grow, share ideas, and
            work on meaningful projects. Whether it&apos;s{" "}
            <span className="text-accent font-medium">web experiences</span> or{" "}
            <span className="text-accent font-medium">data-driven insights</span>
            , I&apos;m always eager to learn, contribute, and sprinkle in a bit
            of cat energy along the way 🐱✨.
          </p>
        </div>
      </div>
    </section>
  );
}
