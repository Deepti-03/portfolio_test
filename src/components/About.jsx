import { useEffect, useRef } from 'react'
import styles from './Section.module.css'
import a from './About.module.css'

export default function About() {
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(els => {
      els.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id='about' className={styles.section} ref={ref}>
      <div className={`${styles.header} reveal`}>
        <span className={styles.label}>Who I Am</span>
        <h2 className={styles.title}>About <span>Me</span></h2>
        <div className={styles.line}></div>
      </div>
      <div className={a.grid}>
        <div className={`${a.card} reveal`}>
          <h3>Career Objective</h3>
          <p>Motivated B.Tech Information Technology student with a strong interest in Python, web development, data science, cybersecurity, and emerging technologies. Experienced in academic projects, research paper presentations, technical workshops, and collaborative activities. Seeking opportunities to apply technical and analytical skills while developing practical industry experience.</p>
        </div>
        <div className={`${a.card} reveal`}>
          <h3>Contact &amp; Info</h3>
          <ul className={a.list}>
            <li><span className={a.icon}>✉</span><span>gsdeeptisri@gmail.com</span></li>
            <li><span className={a.icon}>🎓</span><span>K. Ramakrishnan College of Technology</span></li>
            <li><span className={a.icon}>📅</span><span>B.Tech IT · 2025–2029</span></li>
            <li>
              <span className={a.icon}>🌐</span>
              <div>
                <div className={a.langLabel}>Languages</div>
                <div className={a.langs}>
                  <span className={a.lang}>Tamil</span>
                  <span className={a.lang}>English</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
