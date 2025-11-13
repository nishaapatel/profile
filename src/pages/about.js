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
          <AnimatedText text="Driven by Curiosity, Committed to Excellence" className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
                Hi, I&apos;m Nisha, an IT Support Analyst with a passion for transforming 
                data into actionable insights and innovative solutions.
                I transitioned into the data field, where I specialize in data analysis, 
                machine learning, and predictive modeling. I am committed to solving complex problems 
                and turning data into valuable insights that drive smarter decision-making.
              </p>
              <p className="my-4 font-medium">
              I believe data is more than just numbers. It is about uncovering insights, 
              predicting trends, and enabling smarter, data-driven decisions through effective visualization
              </p>
              <p className="font-medium">
              Whether it&apos;s analyzing large datasets, building predictive models, or automating processes, 
              I bring precision, creativity, and a commitment to excellence to every project. 
              I&apos;m eager to apply my skills to tackle your next data-driven opportunity.
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
                  <AnimatedNumber value={20} />+
                </span>
                <h2 className="text-x1 font-medium capitalize text-dark/75 dark:text-light
                xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Satisfied clients
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={15} />+
                </span>
                <h2 className="text-x1 font-medium capitalize text-dark/75 dark:text-light
                xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Projects completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl                ">
                  <AnimatedNumber value={4} />+
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
