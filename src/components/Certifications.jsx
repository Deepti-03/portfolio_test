import { useEffect, useRef } from 'react'
import styles from './Section.module.css'
import c from './Certifications.module.css'

const certs = [
  'Introduction to Cybersecurity', 'Cybersecurity Fundamentals',
  'Prompt Engineering', 'Soft Skill Development', 'SQL Fundamentals',
  'Fundamentals of Data Science', 'Python Libraries for Data Science',
  'Communication Skills', 'Bano Job Ready', 'Google Sheets',
  'Digital Security Fundamentals', 'Python for Beginners', 'AI Fluency for Students',
]

export default function Certifications() {
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(els => {
      els.forEach(el => { if (el.isIntersecting) { el.target.classList.add('visible'); obs.unobserve(el.target) } })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
  return (
    <section id='certifications' className={styles.section} ref={ref}>
      <div className={`${styles.header} reveal`}>
        <span className={styles.label}>My Credentials</span>
        <h2 className={styles.title}>Certifi<span>cations</span></h2>
        <div className={styles.line}></div>
      </div>
      <div className={c.grid}>
        {certs.map((cert, i) => (
          <div key={i} className={`${c.card} reveal`}>
            <div className={c.dot}></div>
            <span>{cert}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
