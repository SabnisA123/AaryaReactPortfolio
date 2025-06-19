// import React from "react";
// import "./SkillSection.css";
// import SkillProgressBar from "../atoms/SkillProgressBar";
// import { SiHtml5, SiCss3, SiJavascript, SiReact } from "react-icons/si";
// import { TbBrandNodejs } from "react-icons/tb";

// import { FaHtml5 } from "react-icons/fa6";

// const SkillSection: React.FC = () => {
//   return (
//     <>
//       <div>
//         <h2 className="skills-title">My Skills</h2>{" "}
//       </div>
//       <div
//         style={{
//           padding: "20px",
//           maxWidth: "60%",
//           margin: "auto",
//           marginTop: "30px",
//         }}
//       >
//         <SkillProgressBar
//           skillName="HTML"
//           icon={<FaHtml5 size={24} className="icon-style" />}
//           percentage={90}
//           color="#6a11cb"
//         />
//         <SkillProgressBar
//           skillName="CSS"
//           icon={<SiCss3 size={24} className="icon-style" />}
//           percentage={80}
//           color="#6a11cb"
//         />
//         <SkillProgressBar
//           skillName="JavaScript"
//           icon={<SiJavascript size={24} className="icon-style" />}
//           percentage={85}
//           color="#6a11cb"
//         />
//         <SkillProgressBar
//           skillName="React.js"
//           icon={<SiReact size={24} className="icon-style" />}
//           percentage={75}
//           color="#6a11cb"
//         />
//         <SkillProgressBar
//           skillName="Node.js"
//           icon={<TbBrandNodejs size={24} className="icon-style" />}
//           percentage={70}
//           color="#6a11cb"
//         />
//       </div>
//     </>
//   );
// };

// export default SkillSection;
import React from "react";
import "./SkillSection.css";
import SkillProgressBar from "../atoms/SkillProgressBar";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiPostman,
  SiGit,
  
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { TbBrandNodejs } from "react-icons/tb";

const SkillSection = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-title">Skill Set</h2>

      <div className="skills-grid">
        <div className="skills-column">
          <SkillProgressBar skillName="HTML" icon={<SiHtml5 />} percentage={90} color="#8b5cf6" />
          <SkillProgressBar skillName="CSS" icon={<SiCss3 />} percentage={85} color="#8b5cf6" />
          <SkillProgressBar skillName="JavaScript" icon={<SiJavascript />} percentage={80} color="#8b5cf6" />
          <SkillProgressBar skillName="TypeScript" icon={<SiTypescript />} percentage={75} color="#8b5cf6" />
          <SkillProgressBar skillName="React.js" icon={<SiReact />} percentage={85} color="#8b5cf6" />
        </div>

        <div className="skills-column">
          <SkillProgressBar skillName="Node.js" icon={<TbBrandNodejs />} percentage={80} color="#8b5cf6" />
          <SkillProgressBar skillName="Express.js" icon={<SiExpress />} percentage={75} color="#8b5cf6" />
          <SkillProgressBar skillName="MongoDB" icon={<SiMongodb />} percentage={70} color="#8b5cf6" />
          <SkillProgressBar skillName="Postman" icon={<SiPostman />} percentage={80} color="#8b5cf6" />
          <SkillProgressBar skillName="Git" icon={<SiGit />} percentage={90} color="#8b5cf6" />
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
