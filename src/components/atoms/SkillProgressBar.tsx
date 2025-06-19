// import React, { ReactElement } from 'react';
// import './SkillProgressBar.css';

// interface SkillProgressBarProps {
//   skillName: string;
//   icon?: ReactElement;
//   percentage: number;
//   color: string; 
// }

// const SkillProgressBar: React.FC<SkillProgressBarProps> = ({ skillName, icon, percentage, color }) => {
//   return (
//     <div className="skill-container">
//       <div className="skill-info">
//         {icon}
//         <span className="skill-name">{skillName}</span>
//       </div>
//       <div className="progress-bar-container">
//         <div className="progress-bar">
//           <div
//             className="progress-bar-fill"
//             style={{ width: `${percentage}%`, backgroundColor: color }}
//           ></div>
//         </div>
//         <span className="percentage-text">{percentage}%</span>
//       </div>
//     </div>
//   );
// };

// export default SkillProgressBar;
import React from "react";
import "./SkillProgressBar.css";

interface SkillProps {
  skillName: string;
  icon: React.ReactNode;
  percentage: number;
  color: string;
}

const SkillProgressBar: React.FC<SkillProps> = ({ skillName, icon, percentage, color }) => {
  return (
 <div className="skill-bar-wrapper">
  <div className="skill-label">
    <span className="skill-icon">{icon}</span>
    <span>{skillName}</span>
  </div>

  <div className="skill-bar-row">
    <div className="bar-bg">
      <div className="bar-fill" style={{ width: `${percentage}%`, backgroundColor: color }}></div>
    </div>
    <span className="skill-percent">{percentage}%</span>
  </div>
</div>

  );
};

export default SkillProgressBar;
