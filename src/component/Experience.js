import React, {useRef}from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({position, company, companyLink, time, address, work}) => {
    const ref = useRef(null);
    return (
        
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <LiIcon reference={ref} offset={["start end", "end 80%"]}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
            {position}&nbsp;
            <a href={companyLink}
            target="_blank"
            className='text-primary dark:text-primaryDark'>
            <span className="block">@{company}</span>
            </a></h3>
            <span className='py-2 capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {address}
            </span>
            <p className='font-medium w-full md:text-sm'> 
                {work}
            </p>
        </motion.div>
    </li>
    );
}

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset:["start end","center start"]
        }
    )
  return (

    <div className='my-16'>
        <h2 className='font-bold text-8xl mb-16 w-full text-center
        md:text-6xl xs:text-4xl md:mb-8'>
            Experience</h2>

        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
        
        <motion.div
        style={{scaleY: scrollYProgress}}
        className="absolute left-9 top-1 w-[4px] h-full bg-dark dark:bg-light origin-top
        md:w-[2px] md:left-[30px] xs:left-[20px]"/>
            
            <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            <Details
                    position="Customer Service Representative"
                    company="Foodland Supermarket"
                    time="2024"
                    address="Adelaide, Australia"
                    work="Assist 300+ customers daily with efficient and courteous service. 
                        Handle up to $6,000 per shift with high accuracy and attention to detail. 
                        Support store operations and inventory management while promoting customer loyalty programs."
            />

            <Details
                    position="Team Member"
                    company="Delicia Convenience Store"
                    time="2023"
                    address="Wollongong, NSW"
                    work="Provided fast, friendly customer service to approximately 180 customers daily. 
                        Managed stock levels, restocked displays, and operated point-of-sale systems efficiently. 
                        Ensured high standards of store presentation and customer satisfaction."
            />
            <Details
                    position="IT and Office Assistant"
                    company="Accutech Automation"
                    time="2019-2023"
                    address="Gujarat, India"
                    work="Supported daily IT and office operations, including database management and technical documentation. 
                        Assisted in troubleshooting hardware and software issues across multiple departments. 
                        Streamlined Excel-based reporting systems to enhance data tracking and project monitoring."
            />
            </ul>

     

        </div>
    </div>


  )
}

export default Experience
