import { useState, useEffect } from "react";
import { linkData } from "../../lib/data";
const catlogo = `${process.env.PUBLIC_URL}/assets/catLogo.png`;
const handprint = `${process.env.PUBLIC_URL}/assets/handprint.png`;

export default function Header() {
  const [activeSection, setActiveSection] = useState("Home");

  // handle display img on click
  const handleImg = (e) => {
    let imgs = document.querySelectorAll("header a img");
    for (let img of imgs) {
      img.style.display = "none";
    }
    let img = document.querySelector(`a[data-name="${e}"] img`);
    if (img) {
      img.style.display = "block";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(section.id);
          handleImg(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="z-[999] relative">
      <div className="fixed w-full flex flex-col justify-center items-center bg-bkg-2/60 border border-text/10 h-[7.25rem] inset-0 my-0 mx-auto shadow-lg shadow-black/[0.1] md:w-[60rem] md:h-[5.5rem] md:rounded-full md:top-5 2xl:w-[80rem] overflow-hidden">
        <nav className="h-12 flex fixed left-1/2 -translate-x-1/2 sm:h-[initial] sm:rounded-full">
          {/* logo img */}
          <div className="relative flex items-center overflow-hidden user-select-none">
            <img
              src={catlogo}
              alt="logo"
              className="logo m-1 float-left h-12 w-12 sm:h-20 sm:w-20 transition-transform duration-[1000ms] ease-in-out"
              style={{
                position: "relative",
                display: "flex",
                userSelect: "none",
                transitionDuration: "1s",
              }}
            />
          </div>
          <ul className="flex flex-wrap gap-2 justify-center text-sm items-center w-full sm:w-[40rem] md:gap-5 md:text-base">
            {linkData.map((link) => (
              <li
                key={link.id}
                className="relative flex justify-center items-center h-3/4 px-2 md:px-5"
              >
                <a
                  href={link.url}
                  data-name={link.name}
                  onClick={() =>
                    handleImg(link.name) & setActiveSection(link.name)
                  }
                  className={`flex justify-center items-center transition-colors duration-500 shadow-black ${
                    link.name
                  } ${
                    activeSection === link.name
                      ? "text-[rgb(217, 147, 240)] font-bold"
                      : "text-white hover:text-[rgb(217, 147, 240)]]"
                  }
                  `}
                >
                  <img
                    src={handprint}
                    alt="cat print"
                    className="h-10 w-14 fixed opacity-50 sm:h-20 sm:w-28"
                  />
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
