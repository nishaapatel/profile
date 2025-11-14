import React from 'react'
import Link from 'next/link'
import Layout from './Layout'

const Footer = () => {
  return (
    <footer className='w_full border-t-2 border-solid border-dark
    font-medium text-lg dark:text-light dark:border-light sm:text-base'>
        <Layout className='!py-4 flex items-center justify-between lg:flex-col'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <span>Nisha Patel</span>
        </Layout>
    </footer>
  )
}

export default Footer
