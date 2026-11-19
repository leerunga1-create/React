import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import Header from './components/Header'
import Nav from './components/Nav'
import Section from './components/Section'
import Article from './components/Article'
import Footer from './components/Footer'
import Aside from './components/Aside'

function App() {

  return (
    <main className='container'>
      <Header />
      <Nav />
      <div className="content">
        <Section />

        <Aside />
        <Article />
      </div>
      <Footer />

    </main>
  )
}

export default App
