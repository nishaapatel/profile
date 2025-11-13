import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { FacebookIcon, GithubIcon, LinkedInIcon, MoonIcon, SunIcon } from './Icon'
import {motion} from "framer-motion" 
import useThemeSwitcher from './hooks/useThemeSwitcher'

const CustomLink = ({href, title, className=""}) =>{
    const router = useRouter();
    return(
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span className={`
            h-[1px] inline-block bg-dark
            absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? "w-full" : "w-0"}
            dark:bg-light `}
            >&nbsp;</span>
        </Link>
    )
};

const CustomMobileLink = ({href, title, className="", toggle}) =>{
    const router = useRouter();
    const handleCick = () =>{
        toggle();
        router.push(href)
    }
    return(
        <button href={href}  onClick={handleCick}
        className={`${className} relative group text-light dark:text-dark my-4  font-bold`}>
            {title}

            <span className={`
            h-[2px] inline-block bg-light dark:bg-dark
            absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? "w-full" : "w-0"}
            `}
            >&nbsp;</span>
        </button>
    )
};

const NavBar = () => {
    const router = useRouter();
    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick=() => {
        setIsOpen(!isOpen)
    }

    const handleCombinedClick = () => {
        handleClick(); 
        setMode(mode === "light" ? "dark" : "light");
    };

    useEffect(() => {
        setIsOpen(false);
    }, [router.asPath]); // The mobile menu will close whenever the route changes

  return (
    <header className='w_full px-32 py-8 font-medium flex items-center
    dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8'>
        <button className='flex-col justify-center items-center hidden lg:flex p-4' onClick={handleClick}>   
            <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen? 'rotate-45 translate-y-1':'-translate-y-0.5'}`}></span>
            <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen? 'opacity-0':'opacity-100'}`}></span>
            <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen? '-rotate-45 -translate-y-1':'translate-y-0.5'}`}></span>
        </button>
        <span className='-ml-2 hidden lg:flex'>Menu</span>

        <div className="w-full flex justify-between items-center lg:hidden">
            <nav>
                <CustomLink href="/" title="Home" className='mr-4'/>
                <CustomLink href="/about" title="About" className='mx-4'/>
                <CustomLink href="/projects" title="Projects" className='mx-4'/>
                {/* <CustomLink href="/milestones" title="Milestones" className='ml-4'/> */}

            </nav>


            <nav className='flex items-center justify-center flex-wrap'>
                <motion.a href="https://github.com/nishaapatel" target={"_blank"}
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className="w-6 mr-3"
                >
                    <GithubIcon/>
                </motion.a>

                <motion.a href="https://www.linkedin.com/in/nishapatel196/" target={"_blank"}
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className="w-6 mx-3"
                >
                    <LinkedInIcon/>
                </motion.a>
                
                <motion.a href="https://www.facebook.com" target={"_blank"}
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className="w-6 mx-3"
                >
                    <FacebookIcon/>
                </motion.a>

                <button
                onClick={() => setMode(mode === "light"?"dark":"light")}    
                title={mode === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}            
                className={`ml-3 flex items-center justify-center rounded-full
                ${mode === "light"?"bg-dark text-light":"bg-light text-dark"} 
                    `}
                >
                    {mode === "dark" ?
                    <SunIcon className={"fill-dark"} />
                    :<MoonIcon className={"fill-dark"} />

                    }
                </button>

            </nav>

        </div>

        {isOpen?
         <motion.div 
         initial={{scale:0, opacity:0, x:"-50%", y:"-50%"}}
         animate={{scale:1, opacity:1}}
         className="min-w-[70vw] flex flex-col justify-between items-center z-30
         fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
         bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-16">
             <nav className='flex flex-col justify-center items-center'>
                 <CustomMobileLink href="/" title="Home" className='' toggle={handleClick}/>
                 <CustomMobileLink href="/about" title="About" className='' toggle={handleClick}/>
                 <CustomMobileLink href="/projects" title="Projects" className='' toggle={handleClick}/>
                 {/* <CustomMobileLink href="/milestones" title="Milestones" className='' toggle={handleClick}/> */}
             </nav>
 
 
             <nav className='flex items-center justify-center flex-wrap mt-8'>
                 <motion.a href="https://github.com/nishaapatel" target={"_blank"}
                 whileHover={{y:-2}}
                 whileTap={{scale:0.9}}
                 className="w-6 mr-3 bg-light dark:bg-dark rounded-full "
                 >
                     <GithubIcon/>
                 </motion.a>
 
                 <motion.a href="https://www.linkedin.com/in/nishapatel196/" target={"_blank"}
                 whileHover={{y:-2}}
                 whileTap={{scale:0.9}}
                 className="w-6 mx-3 "
                 >
                     <LinkedInIcon/>
                 </motion.a>
                 
                 <motion.a href="https://www.facebook.com" target={"_blank"}
                 whileHover={{y:-2}}
                 whileTap={{scale:0.9}}
                 className="w-6 ml-3 "
                 >
                     <FacebookIcon/>
                 </motion.a>
 
                 <button
                 onClick={handleCombinedClick}
                 title={mode === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
                 className={`w-6 ml-6  flex items-center justify-center rounded-full
                 ${mode === "light"?"bg-dark text-light border border-light"
                    :"bg-light text-dark border border-dark"} 
                     `}
                 >
                     {mode === "dark" ?
                     <SunIcon className={"fill-dark"} />
                     :<MoonIcon className={"fill-dark"} />
 
                     }
                 </button>
 
             </nav>
 
         </motion.div>
         :null
        }

       

        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo/>
        </div>

    </header>
  )
}

export default NavBar
