import "./ExperienceSection.css";
const ExperienceSection = () => {
  return (
    <>
      <section className="timeline-section">
        <h2 className="timeline-title">EXPERIENCE</h2>

        <div className="timeline-container">
          <div className="timeline-block">
            <div className="dot"></div>
            <div className="timeline-card">
              {/* <p className="year">2023 – Present</p>
               */}
              <h3>Full Stack Developer – eMarketizer Consulting</h3>
              <p className="duration-location">
                Kolhapur | Jan 2024 – May-2025 (1.6 years)
              </p>
              <ul className="experience-details">
                <li>
                  Developed Signeting.com – a full-featured responsive email
                  signature platform using React and Node.
                </li>
                <li>
                  Built secure authentication with JWT and protected routes for
                  user access control.
                </li>
                <li>
                  Designed multi-step forms with real-time validation and live
                  preview functionality.
                </li>
                <li>
                  Created a custom Chrome Extension for Gmail/Outlook signature
                  injection.
                </li>
                <li>
                  Designed and integrated RESTful APIs using Express.js and
                  MySQL.
                </li>
                <li>
                  Used Ant Design and CSS to convert Figma designs into
                  pixel-perfect UIs.
                </li>
                <li>
                  Ensured code quality using SonarQube and followed best
                  practices for UI/UX.
                </li>
              </ul>
              <div className="tech-used">
                <button>React.js</button>
                <button>Redux</button>
                <button>Node.js</button>
                <button>Express.js</button>
                <button>MySQL</button>
                <button>HTML5</button>
                <button>CSS3</button>
                <button>JWT</button>
                <button>Ant Design</button>
                <button>Chrome Extension</button>
              </div>
            </div>
          </div>

          <div className="timeline-block">
            <div className="dot"></div>
            <div className="timeline-card">
              <h3>Web Developer Intern – CodeSoft</h3>
              <p className="duration-location">Virtual | May 2022 – Jul 2022</p>

              <ul className="experience-details">
                <li>
                  Worked on front-end development using HTML, CSS, and
                  JavaScript.
                </li>
                <li>
                  Built responsive and user-friendly web interfaces following
                  accessibility standards.
                </li>
                <li>
                  Optimized UI components for cross-browser compatibility and
                  performance.
                </li>
                <li>
                  Used semantic HTML5 and interactive design patterns to enhance
                  user experience.
                </li>
                <li>
                  Implemented basic state management for dynamic content
                  rendering.
                </li>
              </ul>

              <div className="tech-used">
                <button>HTML5</button>
                <button>CSS3</button>
                <button>JavaScript</button>
                <button>Responsive Design</button>
                <button>Accessibility</button>
                <button>Browser Compatibility</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ExperienceSection;
