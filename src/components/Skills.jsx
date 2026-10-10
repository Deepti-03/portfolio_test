import { useEffect, useRef } from 'react'
import styles from './Section.module.css'
import sk from './Skills.module.css'

const skillGroups = [
  { icon: '🐍', title: 'Programming', skills: ['Python', 'C'], color: 'rgba(124,58,237,0.15)', border: 'rgba(124,58,237,0.3)' },
  { icon: '🌐', title: 'Web Development', skills: ['HTML', 'CSS', 'JavaScript'], color: 'rgba(6,182,212,0.15)', border: 'rgba(6,182,212,0.3)' },
  { icon: '📊', title: 'Data & Technology', skills: ['Data Science', 'Python Libraries', 'SQL', 'Cybersecurity'], color: 'rgba(236,72,153,0.15)', border: 'rgba(236,72,153,0.3)' },
]

export default function Skills() {
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(els => {
      els.forEach(el => { if (el.isIntersecting) { el.target.classList.add('visible'); obs.unobserve(el.target) } })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
  return (
    <section id='skills' className={styles.section} ref={ref}>
      <div className={`${styles.header} reveal`}>
        <span className={styles.label}>What I Know</span>
        <h2 className={styles.title}>Technical <span>Skills</span></h2>
        <div className={styles.line}></div>
      </div>
      <div className={sk.grid}>
        {skillGroups.map((g, i) => (
          <div key={i} className={`${sk.card} reveal`}>
            <div className={sk.icon} style={{ background: g.color, border: `1px solid ${g.border}` }}>{g.icon}</div>
            <h3>{g.title}</h3>
            <div className={sk.pills}>
              {g.skills.map(s => <span key={s} className={sk.pill}>{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
