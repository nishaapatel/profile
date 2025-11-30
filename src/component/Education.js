import React, {useRef}from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({type, time, place, info}) => {
    const ref = useRef(null);


    return (
        
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <LiIcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                {type}
            </h3>
            <span className='py-2 capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {place}
            </span>
            <p className='font-medium w-full md:text-sm'> 
                {info}
            </p>
        </motion.div>
    </li>
    );
}

const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center center"]
        }
    )
  return (

    <div className='my-16'>
        <h2 className='font-bold text-8xl mb-16 w-full text-center
        md:text-6xl xs:text-4xl md:mb-8
        '>Education</h2>
        

        <div ref={ref} className='w-[75%] mx-auto relative  lg:w-[90%] md:w-full'>
        
        <motion.div
        style={{scaleY: scrollYProgress}}
        className="absolute left-9 top-1 w-[4px] h-full bg-dark dark:bg-light origin-top
        md:w-[2px] md:left-[30px] xs:left-[20px]"/>
            
            <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
             <Details
            type="Professional Year Program"
            time="2025"
            place="Performance Education"
            info="Focused on Australian business culture, workplace communication, career development, and practical professional skills."
            />
            <Details
            type="Master Of Information Techonology (Extension)"
            time="2023-2025"
            place="Kaplan Business School"
            info="Specialised in networking, cybersecurity, digital forensics, database management, IT project management, and UX design."
            />
            <Details
            type="Master of Science (Physics)"
            time="2017-2019"
            place="Hemchandracharya North Gujarat University"
            info="Studied advanced physics concepts including mechanics, electromagnetism, quantum theory, and developed strong analytical and mathematical skills."
            />
            <Details
            type="Bachelor of Science (Physics)"
            time="2014-2017"
            place="Hemchandracharya North Gujarat University"
            info="Built a solid foundation in core physics, optics, thermodynamics, and hands-on laboratory techniques."
            />
            </ul>
        </div>
    </div>


  )
}

export default Education
