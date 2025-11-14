import React from 'react';
import { motion } from 'framer-motion';

const Skill = ({name}) => {
  return(
      <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
      py-3 px-6 shadow-dark cursor-pointer  dark:text-dark dark:bg-light
      lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3  text-nowrap mx-1 my-3' 
      whileHover={{scale:1.1}}
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.5}}
      >
          {name}
      </motion.div>
  )
}

const SkillSet = ({ skills, bgColor }) => {
  return (
    <div className="w-fit flex rounded-3xl mx-auto flex-wrap justify-center mb-8 px-2"
      style={{ backgroundColor: bgColor }}
    >
      {skills.map((skill, index) => (
        <Skill key={index} name={skill} />
      ))}
    </div>
  );
};

const Skills = () => {
  const skillSets = [
    {
      bgColor: '#16C47F', // Add custom background colors for each set
      skills: ['Python', 'R','C#', 'JavaScript(Basic)', 'SQL']
    },
    {
      bgColor: '#FF9D23',
      skills: ['ServiceNow', 'Microsoft Project', 'GitHub', 'Technical Documents', 'User Guides','Support Ticket Management']
    },    
    {
      bgColor: '#F93827',
      skills: ['Agile Methodologies', 'Artificial Intelligence', 'AWS', 'Windows (Advanced)', 'Linux (Basic)','Data Analysis and reporting']
    },
    // Add more skill sets as needed
  ];

  return (
    <>
      <h2 className='font-bold text-8xl mt-32 w-full text-center md:text-6xl md:mt-16 mb-16'>Skills</h2>
      {skillSets.map((skillSet, index) => (
        <SkillSet key={index} skills={skillSet.skills} bgColor={skillSet.bgColor} />
      ))}
    </>
  );
};

export default Skills;
