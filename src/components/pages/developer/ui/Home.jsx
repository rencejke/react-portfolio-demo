import React from 'react'
import Header from '../../../partials/Header'
import Banner from './banner/Banner'
import About from './about/About'
import Projects from './project/Projects'

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Projects />
    </div>
  )
}

export default Home
