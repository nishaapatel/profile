
import Link from 'next/link'
import React from 'react'
import {motion} from "framer-motion"

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex item-center justify-center mt-2'>
        <MotionLink href="/"
        className='w-16 h-16 bg-dark text-light flex items-center justify-center
        rounded-full text-2x1 font-bold  border border-solid border-transparent
        dark:bg-light dark:text-dark'
        >NP</MotionLink>
    </div>
  )
}

export default Logo
