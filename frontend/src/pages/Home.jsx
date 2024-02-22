import React from 'react'
import Navbar from "../components/Navbar";
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import MiddlePart from '../components/MiddlePart';
 

const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <MiddlePart/>
    <Footer/>
    </>
  )
}

export default Home