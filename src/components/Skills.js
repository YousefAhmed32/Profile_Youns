import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiRedux, SiMongodb, SiExpress, SiTailwindcss, SiBootstrap, SiTypescript, SiLucide, SiShadcnui } from "react-icons/si";

export const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript (ES6+)", icon: <FaJsSquare className="text-yellow-400" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "Shadcn/UI", icon: <SiShadcnui className="text-cyan-400" /> },
    { name: "React.js", icon: <FaReact className="text-blue-400" /> },
    { name: "Redux Toolkit", icon: <SiRedux className="text-purple-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "Mongoose", icon: <SiMongodb className="text-green-400" /> },
    { name: "RESTful APIs", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Git & GitHub", icon: <FaGithub className="text-white" /> },
     { name: "Lucide", icon: <SiLucide /> },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <h2 className="skills-title">Technical Skills</h2>
        <p className="skills-desc">
          Full-stack developer specializing in modern web technologies.
        </p>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
