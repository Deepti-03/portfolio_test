import BgOrbs from './components/BgOrbs'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Research from './components/Research'
import Workshops from './components/Workshops'
import Certifications from './components/Certifications'
import SoftSkills from './components/SoftSkills'
import Activities from './components/Activities'
import Contact from './components/Contact'
import Divider from './components/Divider'
import styles from './App.module.css'

export default function App() {
  return (
    <>
      <BgOrbs />
      <Navbar />
      <main className={styles.main}>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Education />
        <Divider />
        <Skills />
        <Divider />
        <Projects />
        <Divider />
        <Research />
        <Divider />
        <Workshops />
        <Divider />
        <Certifications />
        <Divider />
        <SoftSkills />
        <Divider />
        <Activities />
        <Divider />
        <Contact />
      </main>
      <footer className={styles.footer}>
        <p>Crafted with love by <span>Deepti Sri G S</span> &middot; 2026</p>
      </footer>
    </>
  )
}
