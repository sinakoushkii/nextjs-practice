import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div>
      <h1 className='text-4xl'>About Page</h1>
      <Link href="/about/team" className='text-blue-500 font-bold'>Meet our team</Link>
    </div>
  )
}

export default About