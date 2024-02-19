import React from 'react'
import Navbar from "../components/Navbar";
import MiddlePart from "../components/MiddlePart"
import Hero from '../components/Hero'
import Footer from '../components/Footer'
 

const Home = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <MiddlePart/>
    <Footer/>
    </div>
  )
}

export default Home