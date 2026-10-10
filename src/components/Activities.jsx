import { useEffect, useRef } from 'react'
import styles from './Section.module.css'
import ac from './Activities.module.css'

const activities = [
  { icon: 'ISTE', title: 'Member, ISTE', desc: 'Active member of the Indian Society for Technical Education, engaging in technical learning and professional development activities.' },
  { icon: 'R&D', title: 'Technical Research Activities', desc: 'Participated in technical learning and research-oriented activities in cybersecurity, quantum computing, AI, and data science domains.' },
]

export default function Activities() {
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(els => {
      els.forEach(el => { if (el.isIntersecting) { el.target.classList.add('visible'); obs.unobserve(el.target) } })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
  return (
    <section id='activities' className={styles.section} ref={ref}>
      <div className={`${styles.header} reveal`}>
        <span className={styles.label}>Beyond Academics</span>
        <h2 className={styles.title}>Extracurricular <span>Activities</span></h2>
        <div className={styles.line}></div>
      </div>
      <div className={ac.list}>
        {activities.map((a, i) => (
          <div key={i} className={`${ac.item} reveal`}>
            <div className={ac.icon}>{a.icon}</div>
            <div>
              <h3>{a.title}</h3>
              <p>{a.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
