
import './App.css'
import Hero from './components/heropage/Hero'
import About from './components/aboutpage/About'
import Services from './components/Ourservicespage/Services'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Resume from './components/Resume/Resume'


const App = () => {
  return (
    <div className='App'>
      <Hero />
      <About />
      <Services />
      <Skills />
      <Resume />
      <Contact />
    </div>
  )
}

export default App

