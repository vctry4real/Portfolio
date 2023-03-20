import React from 'react'
import About from './components/about/About'
import Testimonials from './components/testimonials/Testimonials'
import Experience from './components/experience/Experience'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio'
import Service from './components/services/Service'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <div>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Service />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
    </div>
  )
}

export default App