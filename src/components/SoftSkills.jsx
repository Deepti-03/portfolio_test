import { useEffect, useRef } from 'react'
import styles from './Section.module.css'
import ss from './SoftSkills.module.css'

const skills = ['Leadership', 'Communication', 'Public Speaking', 'Analytical Thinking', 'Creative Thinking', 'Logical Thinking']

export default function SoftSkills() {
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(els => {
      els.forEach(el => { if (el.isIntersecting) { el.target.classList.add('visible'); obs.unobserve(el.target) } })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
  return (
    <section id='softskills' className={styles.section} ref={ref}>
      <div className={`${styles.header} reveal`}>
        <span className={styles.label}>Personal Strengths</span>
        <h2 className={styles.title}>Soft <span>Skills</span></h2>
        <div className={styles.line}></div>
      </div>
      <div className={`${ss.wrap} reveal`}>
        {skills.map(s => <div key={s} className={ss.skill}>{s}</div>)}
      </div>
    </section>
  )
}
