import AnimatedText from '@/component/AnimatedText'
import Layout from '@/component/Layout'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { GithubIcon } from '@/component/Icon'
import fproject from "../../public/images/projects/AvdQLD.png";
import projectSpringfield from "../../public/images/projects/FinalDashboard.png";
import projectFungi from "../../public/images/projects/FungiClassification.png";
import projectBellabeat from "../../public/images/projects/BellaBeat.png";
import projectTextClassification from "../../public/images/projects/TextClassification.png";
import projectFurnitureSale from "../../public/images/projects/FurnitureSale.png";
import projectPizzaSale from "../../public/images/projects/PizzaSale.png";
import projectHER from "../../public/images/projects/VisitOverview.PNG";
import projectBCC_LMS from "../../public/images/projects/CollectionAnalysis.PNG";

import {motion} from "framer-motion"
import TransitionEffect from '@/component/TransitionEffect'
const FramerImage = motion(Image);

const FeaturedProject = ({type, title, summary, img, link, github, hashtags}) => {
  return(
    <article className='w-full flex items-center justify-between relative
    rounded-3xl  border border-solid border-dark bg-light shadow-2xl p-12 
    dark:bg-dark dark:border-light dark:shadow-light
    lg:flex-col lg:p-8 xs:rounded-2xl xs:p-4'>
      <Link 
      href={link} 
      target="_blank"
      className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
        <FramerImage
          src={img} alt={title} 
          className="w-full h-auto"
          whileHover={{scale:1.05}}
          transition={{duration:0.2}}
          priority
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
        />
      </Link>  

      <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-4'>
        <span className='text-primary dark:text-primaryDark font-medium text-xl lg:text-2xl'>{type}</span>
        <Link href={link} target="_blank" 
        className='hover:underline underline-offset-2'>
        <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light lg:text-2xl'>{title}</h2>
        </Link>

        <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>

        <div className='font-medium text-primary dark:text-primaryDark flex flex-wrap'>
          {hashtags.map((tag, index) => (
            <span key={index} className='mr-2'>#{tag}</span>
          ))}
        </div>
        
        <div className='mt-2 flex items-center'>
        <Link href={github} target="_blank" className='w-10'><GithubIcon/></Link>  
        <Link href={link} target="_blank"
        className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
        dark:text-dark dark:bg-light
        sm:px-4 sm:text-base'>
        Visit Project</Link>  
        </div>
        
      </div>
    </article>

  )
}

const Project = ({type, title, img, link, github, hashtags}) => {
  return(
    <article className='w-full flex flex-col items-center justify-center rounded-2xl
    border border-solid border-dark bg-light p-6 relative shadow-2xl
     dark:bg-dark dark:border-light dark:shadow-light xs:p-4'>
      <Link 
      href={link} 
      target="_blank"
      className='w-full cursor-pointer overflow-hidden rounded-lg'>
        <FramerImage  src={img} alt={title} className="w-full h-auto"
        whileHover={{scale:1.05}}
        transition={{duration:0.2}}/>
      </Link>  

      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
        <Link href={link} target="_blank" 
        className='hover:underline underline-offset-2'>
        <h2 className='my-2 w-full text-left text-4xl font-bold lg:text-2xl'>{title}</h2>
        </Link>

        <div className='font-medium text-primary dark:text-primaryDark flex flex-wrap'>
          {hashtags.map((tag, index) => (
            <span key={index} className='mr-2'>#{tag}</span>
          ))}
        </div>

        <div className='w-full mt-2 flex items-center justify-between'>        
          <Link 
          href={link} 
          target="_blank"
          className='text-lg font-semibold underline md:text-base'>
          Visit</Link>  

          <Link href={github} target="_blank" className='w-8 md:w-6'><GithubIcon/></Link>  
        </div>
        
      </div>
    </article>

  )
}

const projects = () => {
  return (
    <>
        <Head>
            <title>Nisha Patel | Projects</title>
            <meta name="description" content='any description'/>
        </Head>
        <TransitionEffect/> 
        <main className='w-full flex flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText 
                text="From Knowledge to Action!"
                className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl'/>
                <div className="mb-16 grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                  <div className="col-span-12">

                    <FeaturedProject 
                    title="Advance Queensland program"
                    img={fproject}
                    summary="A story reporting on the success of the program initiated by the Queensland's Government.
                     The results are potentially critical to the scheme, based on the publicly available data on the distribution of the funds over time. 
                     It is expected that by using JupyterNotebook/Python and Guardian API with structured and unstructured data analysis under QDAVI framework,
                     the patterns or concerns can offer meaningful insights."                    
                    link="https://github.com/nishaapatel"
                    github="https://github.com/nishaapatel"
                    type="Featured Project"
                    hashtags={["Narrative", "Python","API","UnstructuredData", "NMF", "LDA", "QDAVI", "DataViz"]}           
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-12">
                  <Project 
                    title="Brisbane City Council Library Management System"
                    img={projectBCC_LMS}                            
                    link="https://app.powerbi.com/view?r=eyJrIjoiY2RkYjk4MWUtM2NlOS00NGM5LWE0MTktNWE4OTBkNjlhMjhiIiwidCI6IjFjYTRjNDdkLTU4ODEtNDE3Zi1iY2U0LTY2ZDNhMDZlMzk0MSJ9"
                    github="https://github.com/davidhuynhgit/BCC_LMS"
                    type="Data Analysis"
                    hashtags={["SQL","PowerBI","PowerQuery","DAX", "DataViz", "Real-worldData","BigData"]} 
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-12">
                  <Project 
                    title="Hospital Emergency Room Analysis with PowerBI"
                    img={projectHER}                            
                    link="https://app.powerbi.com/view?r=eyJrIjoiZWVhYTRkNTItZTI5OC00ZjNkLTg1MmItMzQyMGY1MTE3MDcxIiwidCI6IjFjYTRjNDdkLTU4ODEtNDE3Zi1iY2U0LTY2ZDNhMDZlMzk0MSJ9"
                    github="https://github.com/davidhuynhgit/PowerBI_HospitalER"
                    type="Data Analysis"
                    hashtags={["PowerBI","PowerQuery","DAX", "DataViz", "CustomedChart","ColorTheme"]} 
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-12">
                  <Project 
                    title="Furniture Sale Analysis by SQL"
                    img={projectFurnitureSale}                            
                    link="https://github.com/davidhuynhgit/FunitureSale"
                    github="https://github.com/davidhuynhgit/FunitureSale"
                    type="Data Analysis"
                    hashtags={["SQL","MS SQL Server", "PivotTable","Dynamic SQL", "Function", "Procedure"]} 
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-12">
                  <Project 
                    title="Pizza Sale Dashboard with PowerBI"
                    img={projectPizzaSale}                            
                    link="https://github.com/davidhuynhgit/PizzaSale"
                    github="https://github.com/davidhuynhgit/PizzaSale"
                    type="Data Analysis"
                    hashtags={["PowerBI","DAX", "DataTransform","DataViz", "AnalyticalReport"]} 
                    />
                  </div>

                  {/* <div className="col-span-6 sm:col-span-12">
                  <Project 
                    title="Springfield's IPV crimes analysis"
                    img={projectSpringfield}                            
                    link="https://public.tableau.com/app/profile/david.huynh2218/viz/Digital_Dashboard/Final"
                    github="https://github.com/davidhuynhgit/SpringfieldDashboard/tree/main"
                    type="Data Analysis"
                    hashtags={["Tableau", "Dashboard","IterativeDesign","StoryTelling"]} 
                    />
                  </div> */}
                  
                  {/* <div className="col-span-6 sm:col-span-12">
                  <Project 
                    title="Automated Fungi Classification"
                    img={projectFungi}                            
                    link="https://github.com/davidhuynhgit/FungiClassification"
                    github="https://github.com/davidhuynhgit/FungiClassification"
                    type="Machine Learning"
                    hashtags={["PyTorch", "ImageClassification", "FoundationModel", "Evaluation","DeepLearning"]} 
                    />
                  </div> */}

                  <div className="col-span-6 sm:col-span-12">
                  <Project 
                    title="Personal fitness tracking analysis"
                    img={projectBellabeat}                            
                    link="https://github.com/davidhuynhgit/BellaBeat"
                    github="https://github.com/davidhuynhgit/BellaBeat"
                    type="Data Analysis"
                    hashtags={["R","PowerBI","Correlation","PatternExploration","DataMining"]} 
                    />
                  </div>

                  {/* <div className="col-span-6 sm:col-span-12">
                  <Project 
                    title="Large-scale documents classification"
                    img={projectTextClassification}                            
                    link="https://github.com/davidhuynhgit/LargeTextClassification"
                    github="https://github.com/davidhuynhgit/LargeTextClassification"
                    type="Data Analysis"
                    hashtags={["Weka","Java", "Classification","FeatureSelection","TF-IDF"]} 
                    />
                  </div> */}

                </div>
                
            </Layout>
        </main>
    </>
  )
}

export default projects
