import Navbar from "../navbar/Navbar"
import Hero from '../Hero/Hero'
import AppHeader from '../appHeader/AppHeader'
import React from 'react'

function Home() {
  return (
    <div>
        <Navbar />
        <AppHeader />
        <Hero />
    </div>
  )
}

export default Home