import React from 'react';

import reactIcon from '../../../../public/skills-icons/react.svg';
import cssIcon from '../../../../public/skills-icons/css.svg';
import firebaseIcon from '../../../../public/skills-icons/firebase.svg';

import htmlIcon from '../../../../public/skills-icons/gtml.svg';
import jsIcon from '../../../../public/skills-icons/icons8-javascript.svg';
import mongodbIcon from '../../../../public/skills-icons/mongodb.svg';
import nodeIcon from '../../../../public/skills-icons/icons8-nodejs (1).svg';
import expressIcon from '../../../../public/skills-icons/icons8-express-js.svg';
import designIcon from '../../../../public/skills-icons/icons8-figma.svg';
import creativityIcon from '../../../../public/skills-icons/icons8-ux.svg';
import rest from '../../../../public/skills-icons/icons8-rest-api.svg';
import git from '../../../../public/skills-icons/icons8-git.svg';

const skillsData = {
  frontend: [
    { name: 'React', icon: reactIcon },
    { name: 'JavaScript', icon: jsIcon },
    { name: 'HTML', icon: htmlIcon },
    { name: 'CSS', icon: cssIcon },
    { name: 'Firebase', icon: firebaseIcon }
  ],
  backend: [
    { name: 'MongoDB', icon: mongodbIcon },
    { name: 'Node.js', icon: nodeIcon },
    { name: 'Express.js', icon: expressIcon },
    { name: 'Git', icon: git },
    
    { name: 'Rest API', icon: rest }
  ],
  creative: [
    { name: 'Figma', icon: designIcon },
    { name: 'UX/UI', icon: creativityIcon }
  ]
};

const Skills = () => {
  return (
    <>
    <div className="mt-6 p-[0.5px] rounded-sm bg-gradient-to-tr dark:from-slate-600 dark:to-teal-600">
      <div className="bg-indigo-200 dark:bg-slate-800 globalBG rounded-sm p-6 box-border">
      
        <div className="grid lg:grid-cols-3 gap-6">
          <SkillCategory title="Frontend" skills={skillsData.frontend} />
          <SkillCategory title="Backend" skills={skillsData.backend} />
          <SkillCategory title="Creative Skills" skills={skillsData.creative} />
        </div>
       
      
      </div>
      
    </div>
      {/* <div className="text-sm mt-2 text-right mb-0 pb-0 font-medium dark:text-slate-200 text-slate-800 leading-tight md:leading-snug tracking-tight md:tracking-normal font-input-sans">Continue Gaining...</div> */}
      </>
  );
};

const SkillCategory = ({ title, skills }) => {
  return (
    <div className="bg-indigo-50     dark:bg-slate-700 rounded-sm shadow-lg p-4">
      <h3 className="text-lg  font-input-sans font-semibold dark:text-slate-200 text-slate-800 mb-4">{title}</h3>
      <div className="grid grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center gap-4">
            <img className="w-8 h-8" src={skill.icon} alt={skill.name} />
            <span className="dark:text-slate-200  font-plex-sans text-slate-800">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Skills;