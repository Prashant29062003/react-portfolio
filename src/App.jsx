import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import toast, { Toaster } from 'react-hot-toast';

function App() {
  

  return (
    <>
      <div className="min-h-screen">
        <Navbar/>
        <main className="pt-20">
          <Home/>
          <About/>
          <Projects/>
          <Contact/>
          <Footer/>
        </main>
      </div>
      <Toaster/>
    </>
  )
}

export default App
