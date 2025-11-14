import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/component/Layout'
import profilePic from "../../public/images/profile/BR_Photo.png"
import QRPic from "../../public/images/profile/QR.png"
import AnimatedText from '@/component/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/component/Icon'
import TransitionEffect from '@/component/TransitionEffect'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Nisha Patel | Home</title>
        <meta name="description" content="Nisha Patel's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <TransitionEffect/>
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='py-0 md:pt-16 sm:pt-8'>
          <div className="flex items-center justify-between mx-auto w-full lg:flex-col">
            <div className='w-1/3 justify-items-center sm:w-full'>
              <div className="rounded-2xl bg-light w-2/3 mx-auto">
              <Image
                src={profilePic}
                alt="Nisha"
                className="h-auto rounded-2xl z-1 bg-radial"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
                 </div>
            </div>

          

            <div className='p-4 w-2/3 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text="ering technology with clarity and precision" className='!text-6xl !text-left
              xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'/>            
              <p className='my-6 text-base font-medium text-justify break-words hyphens-auto'>
              Hello! I am Nisha Patel.         
              Dedicated IT Support Analyst with expertise in ServiceNow, Windows, and Office 365 environments. 
              Skilled in troubleshooting, system administration, and end-user support with a focus on efficiency and reliability. 
              Passionate about delivering seamless IT solutions and continuous improvement in fast-paced workplaces.
              </p>

              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="/Resume.pdf" target={"_blank"}
                  className ="flex items-center p-2 px-4 !w-[142px] !h-[50px]
                  bg-dark text-light 
                  dark:bg-light dark:text-dark 
                  rounded-lg text-lg font-semibold 
                  border-2 border-solid border-transparent hover:border-dark hover:dark:border-light
                  hover:bg-light hover:text-dark
                  hover:dark:bg-dark hover:dark:text-light              "
                  download={true}
                >Resume <LinkArrow  className="ml-2 !h-[50px] !w-[30px]"  />
                </Link>
                <Link href="mailto:nishaapatel196@gmail.com"
                className='ml-4 text-lg font-medium capitalize 
                text-dark underline dark:text-light
                md:text-base'
                >Contact</Link>              
              </div>

              <div className='w-full hidden pt-10
              xs:flex xs:justify-center'>
                <div className='flex flex-col items-center'>
                  <Image 
                    src={QRPic} 
                    alt="Nisha" 
                    className='border border-dark'
                    priority
                    width={180} 
                    height={180} 
                  />
                  <p className='p-2 text-dark dark:text-light font-bold text-lg'>
                    Scan & Share
                  </p>
                </div>
              </div>

            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
