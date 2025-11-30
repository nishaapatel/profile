import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import Layout from '@/component/Layout'
import AnimatedText from '@/component/AnimatedText'
import Image from 'next/image'
import profilePic from "../../public/images/profile/BR_Photo.png"
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/component/Skills'
import Experience from '@/component/Experience'
import Education from '@/component/Education'
import Certificates from '@/component/Certificates'
import TransitionEffect from '@/component/TransitionEffect'

const AnimatedNumber = ({value})=>{
const ref = useRef(null);
const motionValue  = useMotionValue(0);
const springValue = useSpring(motionValue,{duration:3000})
const isInView = useInView(ref, {once:true});

useEffect(() => {
  if(isInView){
    motionValue.set(value);
  }
},[isInView,value,motionValue])

useEffect(()=> {
  springValue.on("change", (latest) =>{
    if(ref.current && latest.toFixed(0) <= value){
        ref.current.textContent = latest.toFixed(0);
    }
  })
},[springValue,value])
  return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
      <Head>
        <title>Nisha Patel | About</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect/>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="py-16">
          <AnimatedText text="Bridging people and technology through smart IT solutions." className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
                Hi, I&apos;m Nisha, a results-driven IT Support Analyst with practical experience in ServiceNow ticketing,   
                SLA-based issue resolution, and end-user support across Windows, Office 365, and Active Directory environments. 
                I possess strong technical expertise in troubleshooting hardware, software, and network issues, system configuration, and account management.
              </p>
              <p className="my-4 font-medium">
              Holding a Master of Information Technology and a background in Physics, I combine analytical thinking with hands-on technical proficiency to deliver reliable and efficient IT solutions. 
              I have successfully improved service delivery efficiency and documentation standards, contributing to enhanced user satisfaction and operational productivity.
              </p>
              <p className="font-medium">
              Committed to continuous learning and professional excellence, 
              I aim to leverage my technical knowledge and customer-focused approach to support business objectives and strengthen 
              IT operations in dynamic organizational environments.
              </p>
            </div>

            <div className="col-span-3 relative h-max p-8 z-0  
            xl:col-span-4 
            md:order-1 md:col-start-3 md:col-end-7  
            sm:col-start-2 sm:col-end-8 
            xs:col-span-8">
              <div className="absolute top-2 left-2 -z-1 w-[102%] h-[103%] rounded-2xl bg-dark dark:bg-stone-500" />
              <div
                className="absolute top-0 left-0 w-full h-full rounded-2xl border-2 border-solid border-dark
          bg-light p-8"
              />
              <Image
                src={profilePic}
                alt="Nisha"
                className="relative w-full h-auto rounded-2xl z-1 bg-radial"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={10} />+
                </span>
                <h2 className="text-x1 font-medium capitalize text-dark/75 dark:text-light
                xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Technical Skills Courses Completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={3} />+
                </span>
                <h2 className="text-x1 font-medium capitalize text-dark/75 dark:text-light
                xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Projects completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl                ">
                  <AnimatedNumber value={3} />+
                </span>
                <h2 className="text-x1 font-medium capitalize text-dark/75 dark:text-light
                xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Years of experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
          <Certificates />
        </Layout>
      </main>
    </>
  );
}

export default about
