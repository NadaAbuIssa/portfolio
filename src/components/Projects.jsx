// import styles
const bike = `${process.env.PUBLIC_URL}/assets/projects/project1.jpg`;
const dataset = `${process.env.PUBLIC_URL}/assets/projects/project2.png`;
const INV = `${process.env.PUBLIC_URL}/assets/projects/project3.jpg`;
const saturn = `${process.env.PUBLIC_URL}/assets/projects/project4.png`;
const translate = `${process.env.PUBLIC_URL}/assets/projects/project5.jpg`;

export default function Projects() {
  return (
    <section id="Projects" className="h-[150dvh] bg-bkg-2">
      <div className="flex flex-col justify-center items-center h-full p-16  sm lx md">
        <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-mono tracking-tights text-white pb-10 leading-[45px]">
          Projects();
        </h1>
        {/* flex pb-10 container md sm snap-x md:snap-x hover:snap-x gap-16 overflow-x-auto */}
        <div
          id=""
          className="flex overflow-x-auto max-w-full"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex space-x-4 p-4">
            {/* project1 */}
            <div className="scroll-ml-32 snap-start snap-always flex-shrink-0 w-64 card animate__animated animate__fadeInUp">
              <img src={INV} alt="Project Cover" className="card-image" />
              <div className="card-content">
                <h2 className="card-title animate__animated animate__fadeInDown">
                  inventory-management-system
                </h2>
                <p className="card-description animate__animated animate__fadeIn">
                  An inventory management system designed to track and manage a
                  specific inventory.
                </p>
                <div className="card-languages animate__animated animate__fadeIn">
                  <ul className=" flex gap-2 flex-wrap">
                    <li className="bg-accent px-3 py-1 font-semibold text-xs uppercase text-text rounded-lg">
                      spring boot
                    </li>
                    <li className="bg-accent px-3 py-1 font-semibold text-xs uppercase text-text rounded-lg">
                      java
                    </li>
                    <li className="bg-accent px-3 py-1 font-semibold text-xs uppercase text-text rounded-lg">
                      mysql
                    </li>
                    <li className="bg-accent px-3 py-1 font-semibold text-xs uppercase text-text rounded-lg">
                      swagger hub
                    </li>
                    <li className="bg-accent px-3 py-1 font-semibold text-xs uppercase text-text rounded-lg">
                      postman
                    </li>
                  </ul>
                </div>
                <a
                  className="flex btn-github"
                  href="https://github.com/NadaAbuIssa/inventory-management-system"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.99992 1.33331C7.12444 1.33331 6.25753 1.50575 5.4487 1.84078C4.63986 2.17581 3.90493 2.66688 3.28587 3.28593C2.03563 4.53618 1.33325 6.23187 1.33325 7.99998C1.33325 10.9466 3.24659 13.4466 5.89325 14.3333C6.22659 14.3866 6.33325 14.18 6.33325 14C6.33325 13.8466 6.33325 13.4266 6.33325 12.8733C4.48659 13.2733 4.09325 11.98 4.09325 11.98C3.78659 11.2066 3.35325 11 3.35325 11C2.74659 10.5866 3.39992 10.6 3.39992 10.6C4.06659 10.6466 4.41992 11.2866 4.41992 11.2866C4.99992 12.3 5.97992 12 6.35992 11.84C6.41992 11.4066 6.59325 11.1133 6.77992 10.9466C5.29992 10.78 3.74659 10.2066 3.74659 7.66665C3.74659 6.92665 3.99992 6.33331 4.43325 5.85998C4.36659 5.69331 4.13325 4.99998 4.49992 4.09998C4.49992 4.09998 5.05992 3.91998 6.33325 4.77998C6.85992 4.63331 7.43325 4.55998 7.99992 4.55998C8.56659 4.55998 9.13992 4.63331 9.66659 4.77998C10.9399 3.91998 11.4999 4.09998 11.4999 4.09998C11.8666 4.99998 11.6333 5.69331 11.5666 5.85998C11.9999 6.33331 12.2533 6.92665 12.2533 7.66665C12.2533 10.2133 10.6933 10.7733 9.20659 10.94C9.44659 11.1466 9.66659 11.5533 9.66659 12.1733C9.66659 13.0666 9.66659 13.7866 9.66659 14C9.66659 14.18 9.77325 14.3933 10.1133 14.3333C12.7599 13.44 14.6666 10.9466 14.6666 7.99998C14.6666 7.1245 14.4941 6.25759 14.1591 5.44876C13.8241 4.63992 13.333 3.90499 12.714 3.28593C12.0949 2.66688 11.36 2.17581 10.5511 1.84078C9.7423 1.50575 8.8754 1.33331 7.99992 1.33331V1.33331Z"
                      fill="currentcolor"
                    ></path>
                  </svg>
                  <span>View on Github</span>
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="card animate__animated animate__fadeInUp snap-center snap-always flex-shrink-0 w-64">
              <img src={dataset} alt="Project Cover" className="card-image" />
              <div className="card-content">
                <h2 className="card-title animate__animated animate__fadeInDown">
                  Dataset Preprocessing
                </h2>
                <p className="card-description animate__animated animate__fadeIn">
                  Dataset preprocessing using Shell scripting.
                </p>
                <div className="card-languages animate__animated animate__fadeIn">
                  <ul className="flex gap-2 flex-wrap">
                    <li className="bg-accent px-3 py-1 font-semibold text-xs uppercase text-text rounded-lg">
                      Shell Scripting
                    </li>
                    <li className="bg-accent px-3 py-1 font-semibold text-xs uppercase text-text rounded-lg">
                      command-line
                    </li>
                    <li className="bg-accent px-3 py-1 font-semibold text-xs uppercase text-text rounded-lg">
                      bash
                    </li>
                    <li className="bg-accent px-3 py-1 font-semibold text-xs uppercase text-text rounded-lg">
                      Terminal
                    </li>
                    <li className="bg-accent px-3 py-1 font-semibold text-xs uppercase text-text rounded-lg">
                      linux
                    </li>
                  </ul>
                </div>
                <a
                  className="flex btn-github"
                  href="https://github.com/NadaAbuIssa/DatasetPreprocessing"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.99992 1.33331C7.12444 1.33331 6.25753 1.50575 5.4487 1.84078C4.63986 2.17581 3.90493 2.66688 3.28587 3.28593C2.03563 4.53618 1.33325 6.23187 1.33325 7.99998C1.33325 10.9466 3.24659 13.4466 5.89325 14.3333C6.22659 14.3866 6.33325 14.18 6.33325 14C6.33325 13.8466 6.33325 13.4266 6.33325 12.8733C4.48659 13.2733 4.09325 11.98 4.09325 11.98C3.78659 11.2066 3.35325 11 3.35325 11C2.74659 10.5866 3.39992 10.6 3.39992 10.6C4.06659 10.6466 4.41992 11.2866 4.41992 11.2866C4.99992 12.3 5.97992 12 6.35992 11.84C6.41992 11.4066 6.59325 11.1133 6.77992 10.9466C5.29992 10.78 3.74659 10.2066 3.74659 7.66665C3.74659 6.92665 3.99992 6.33331 4.43325 5.85998C4.36659 5.69331 4.13325 4.99998 4.49992 4.09998C4.49992 4.09998 5.05992 3.91998 6.33325 4.77998C6.85992 4.63331 7.43325 4.55998 7.99992 4.55998C8.56659 4.55998 9.13992 4.63331 9.66659 4.77998C10.9399 3.91998 11.4999 4.09998 11.4999 4.09998C11.8666 4.99998 11.6333 5.69331 11.5666 5.85998C11.9999 6.33331 12.2533 6.92665 12.2533 7.66665C12.2533 10.2133 10.6933 10.7733 9.20659 10.94C9.44659 11.1466 9.66659 11.5533 9.66659 12.1733C9.66659 13.0666 9.66659 13.7866 9.66659 14C9.66659 14.18 9.77325 14.3933 10.1133 14.3333C12.7599 13.44 14.6666 10.9466 14.6666 7.99998C14.6666 7.1245 14.4941 6.25759 14.1591 5.44876C13.8241 4.63992 13.333 3.90499 12.714 3.28593C12.0949 2.66688 11.36 2.17581 10.5511 1.84078C9.7423 1.50575 8.8754 1.33331 7.99992 1.33331V1.33331Z"
                      fill="currentcolor"
                    ></path>
                  </svg>
                  <span>View on Github</span>
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="card animate__animated animate__fadeInUp snap-center snap-always flex-shrink-0 w-64">
              <img src={saturn} alt="Project Cover" className="card-image" />
              <div className="card-content">
                <h2 className="card-title animate__animated animate__fadeInDown">
                  Cloud services company
                </h2>
                <p className="card-description animate__animated animate__fadeIn">
                  Web site theme for a Cloud services company.
                </p>
                <div className="card-languages animate__animated animate__fadeIn">
                  <ul className=" flex gap-2 flex-wrap">
                    <li className="bg-accent px-3 py-1 font-semibold text-xs uppercase text-text rounded-lg">
                      html
                    </li>
                    <li className="bg-accent px-3 py-1 font-semibold text-xs uppercase text-text rounded-lg">
                      java
                    </li>
                    <li className="bg-accent px-3 py-1 font-semibold text-xs uppercase text-text rounded-lg">
                      css
                    </li>
                    <li className="bg-accent px-3 py-1 font-semibold text-xs uppercase text-text rounded-lg">
                      javascript
                    </li>
                    <li className="bg-accent px-3 py-1 font-semibold text-xs uppercase text-text rounded-lg">
                      bootstrap
                    </li>
                  </ul>
                </div>
                <a
                  className="flex btn-github"
                  href="https://nadaabuissa.github.io/Second-Task/"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.99992 1.33331C7.12444 1.33331 6.25753 1.50575 5.4487 1.84078C4.63986 2.17581 3.90493 2.66688 3.28587 3.28593C2.03563 4.53618 1.33325 6.23187 1.33325 7.99998C1.33325 10.9466 3.24659 13.4466 5.89325 14.3333C6.22659 14.3866 6.33325 14.18 6.33325 14C6.33325 13.8466 6.33325 13.4266 6.33325 12.8733C4.48659 13.2733 4.09325 11.98 4.09325 11.98C3.78659 11.2066 3.35325 11 3.35325 11C2.74659 10.5866 3.39992 10.6 3.39992 10.6C4.06659 10.6466 4.41992 11.2866 4.41992 11.2866C4.99992 12.3 5.97992 12 6.35992 11.84C6.41992 11.4066 6.59325 11.1133 6.77992 10.9466C5.29992 10.78 3.74659 10.2066 3.74659 7.66665C3.74659 6.92665 3.99992 6.33331 4.43325 5.85998C4.36659 5.69331 4.13325 4.99998 4.49992 4.09998C4.49992 4.09998 5.05992 3.91998 6.33325 4.77998C6.85992 4.63331 7.43325 4.55998 7.99992 4.55998C8.56659 4.55998 9.13992 4.63331 9.66659 4.77998C10.9399 3.91998 11.4999 4.09998 11.4999 4.09998C11.8666 4.99998 11.6333 5.69331 11.5666 5.85998C11.9999 6.33331 12.2533 6.92665 12.2533 7.66665C12.2533 10.2133 10.6933 10.7733 9.20659 10.94C9.44659 11.1466 9.66659 11.5533 9.66659 12.1733C9.66659 13.0666 9.66659 13.7866 9.66659 14C9.66659 14.18 9.77325 14.3933 10.1133 14.3333C12.7599 13.44 14.6666 10.9466 14.6666 7.99998C14.6666 7.1245 14.4941 6.25759 14.1591 5.44876C13.8241 4.63992 13.333 3.90499 12.714 3.28593C12.0949 2.66688 11.36 2.17581 10.5511 1.84078C9.7423 1.50575 8.8754 1.33331 7.99992 1.33331V1.33331Z"
                      fill="currentcolor"
                    ></path>
                  </svg>
                  <span>View on Github</span>
                </a>
              </div>
            </div>
            {/* #####################################################################################################################################################################################################################################################################
        #################################################################################################################################################################################################################################################################################################*/}

            {/* Project 4 */}
            <div className="card animate__animated animate__fadeInUp snap-center snap-always flex-shrink-0 w-64">
              <img src={bike} alt="Project Cover" className="card-image" />
              <div className="card-content">
                <h2 className="card-title animate__animated animate__fadeInDown">
                  Communicate-Data-Findings
                </h2>
                <p className="card-description animate__animated animate__fadeIn">
                  This is an Udacity Nanodegree project.
                </p>
                <div className="card-languages animate__animated animate__fadeIn">
                  <ul className="flex gap-2 flex-wrap">
                    {/* Tags */}
                    <li className="bg-accent px-3 py-1 font-semibold text-xs uppercase text-text rounded-lg">
                      Python
                    </li>
                    <li className="bg-accent px-3 py-1 font-semibold text-xs uppercase text-text rounded-lg">
                      Jupyter Notebook
                    </li>
                    <li className="bg-accent px-3 py-1 font-semibold text-xs uppercase text-text rounded-lg">
                      Exploratory Data Analysis
                    </li>

                    <li className="bg-accent px-3 py-1 font-semibold text-xs uppercase text-text rounded-lg">
                      Data Analysis
                    </li>
                  </ul>
                </div>
                <a
                  className="flex btn-github"
                  href="https://github.com/NadaAbuIssa/Communicate-Data-Findings"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.99992 1.33331C7.12444 1.33331 6.25753 1.50575 5.4487 1.84078C4.63986 2.17581 3.90493 2.66688 3.28587 3.28593C2.03563 4.53618 1.33325 6.23187 1.33325 7.99998C1.33325 10.9466 3.24659 13.4466 5.89325 14.3333C6.22659 14.3866 6.33325 14.18 6.33325 14C6.33325 13.8466 6.33325 13.4266 6.33325 12.8733C4.48659 13.2733 4.09325 11.98 4.09325 11.98C3.78659 11.2066 3.35325 11 3.35325 11C2.74659 10.5866 3.39992 10.6 3.39992 10.6C4.06659 10.6466 4.41992 11.2866 4.41992 11.2866C4.99992 12.3 5.97992 12 6.35992 11.84C6.41992 11.4066 6.59325 11.1133 6.77992 10.9466C5.29992 10.78 3.74659 10.2066 3.74659 7.66665C3.74659 6.92665 3.99992 6.33331 4.43325 5.85998C4.36659 5.69331 4.13325 4.99998 4.49992 4.09998C4.49992 4.09998 5.05992 3.91998 6.33325 4.77998C6.85992 4.63331 7.43325 4.55998 7.99992 4.55998C8.56659 4.55998 9.13992 4.63331 9.66659 4.77998C10.9399 3.91998 11.4999 4.09998 11.4999 4.09998C11.8666 4.99998 11.6333 5.69331 11.5666 5.85998C11.9999 6.33331 12.2533 6.92665 12.2533 7.66665C12.2533 10.2133 10.6933 10.7733 9.20659 10.94C9.44659 11.1466 9.66659 11.5533 9.66659 12.1733C9.66659 13.0666 9.66659 13.7866 9.66659 14C9.66659 14.18 9.77325 14.3933 10.1133 14.3333C12.7599 13.44 14.6666 10.9466 14.6666 7.99998C14.6666 7.1245 14.4941 6.25759 14.1591 5.44876C13.8241 4.63992 13.333 3.90499 12.714 3.28593C12.0949 2.66688 11.36 2.17581 10.5511 1.84078C9.7423 1.50575 8.8754 1.33331 7.99992 1.33331V1.33331Z"
                      fill="currentcolor"
                    ></path>
                  </svg>
                  <span>View on Github</span>
                </a>
              </div>
            </div>
            {/* project5 */}
            <div className="card animate__animated animate__fadeInUp snap-center snap-always flex-shrink-0 w-64">
              <img src={translate} alt="Project Cover" className="card-image" />
              <div className="card-content">
                <h2 className="card-title animate__animated animate__fadeInDown">
                  Translate article by selection using Google Translate API
                </h2>
                <p className="card-description animate__animated animate__fadeIn">
                  In this project, I built a web page that allows users to
                  translate an article by selecting the text.
                </p>
                <div className="card-languages animate__animated animate__fadeIn">
                  <ul className=" flex gap-2 flex-wrap">
                    <li className="bg-accent px-3 py-1 font-semibold text-xs uppercase text-text rounded-lg">
                      web development
                    </li>
                    <li className="bg-accent px-3 py-1 font-semibold text-xs uppercase text-text rounded-lg">
                      API
                    </li>
                    <li className="bg-accent px-3 py-1 font-semibold text-xs uppercase text-text rounded-lg">
                      HTML
                    </li>
                    <li className="bg-accent px-3 py-1 font-semibold text-xs uppercase text-text rounded-lg">
                      Java Script
                    </li>
                    <li className="bg-accent px-3 py-1 font-semibold text-xs uppercase text-text rounded-lg">
                      Article
                    </li>
                  </ul>
                </div>
                <a
                  className="flex btn-github"
                  href="https://nadaabuissa.github.io/Third-Project/article.html"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.99992 1.33331C7.12444 1.33331 6.25753 1.50575 5.4487 1.84078C4.63986 2.17581 3.90493 2.66688 3.28587 3.28593C2.03563 4.53618 1.33325 6.23187 1.33325 7.99998C1.33325 10.9466 3.24659 13.4466 5.89325 14.3333C6.22659 14.3866 6.33325 14.18 6.33325 14C6.33325 13.8466 6.33325 13.4266 6.33325 12.8733C4.48659 13.2733 4.09325 11.98 4.09325 11.98C3.78659 11.2066 3.35325 11 3.35325 11C2.74659 10.5866 3.39992 10.6 3.39992 10.6C4.06659 10.6466 4.41992 11.2866 4.41992 11.2866C4.99992 12.3 5.97992 12 6.35992 11.84C6.41992 11.4066 6.59325 11.1133 6.77992 10.9466C5.29992 10.78 3.74659 10.2066 3.74659 7.66665C3.74659 6.92665 3.99992 6.33331 4.43325 5.85998C4.36659 5.69331 4.13325 4.99998 4.49992 4.09998C4.49992 4.09998 5.05992 3.91998 6.33325 4.77998C6.85992 4.63331 7.43325 4.55998 7.99992 4.55998C8.56659 4.55998 9.13992 4.63331 9.66659 4.77998C10.9399 3.91998 11.4999 4.09998 11.4999 4.09998C11.8666 4.99998 11.6333 5.69331 11.5666 5.85998C11.9999 6.33331 12.2533 6.92665 12.2533 7.66665C12.2533 10.2133 10.6933 10.7733 9.20659 10.94C9.44659 11.1466 9.66659 11.5533 9.66659 12.1733C9.66659 13.0666 9.66659 13.7866 9.66659 14C9.66659 14.18 9.77325 14.3933 10.1133 14.3333C12.7599 13.44 14.6666 10.9466 14.6666 7.99998C14.6666 7.1245 14.4941 6.25759 14.1591 5.44876C13.8241 4.63992 13.333 3.90499 12.714 3.28593C12.0949 2.66688 11.36 2.17581 10.5511 1.84078C9.7423 1.50575 8.8754 1.33331 7.99992 1.33331V1.33331Z"
                      fill="currentcolor"
                    ></path>
                  </svg>
                  <span>View on Github</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
