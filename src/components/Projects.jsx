import { useEffect, useRef } from 'react'
import styles from './Section.module.css'
import p from './Projects.module.css'

const projects = [
  { num: '01', title: 'Health Habit Monitor', desc: 'Developed a project focused on monitoring and organizing health-related habits. Built to help users track daily wellness activities and routines systematically.', tags: ['Python', 'Health Tech', 'Data Tracking'] },
  { num: '02', title: 'Family Tree Management System', desc: 'Implemented a family relationship management system using binary tree data structures, showcasing strong understanding of algorithms and data structures.', tags: ['C', 'Binary Trees', 'Data Structures'] },
]

export default function Projects() {
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(els => {
      els.forEach(el => { if (el.isIntersecting) { el.target.classList.add('visible'); obs.unobserve(el.target) } })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
  return (
    <section id='projects' className={styles.section} ref={ref}>
      <div className={`${styles.header} reveal`}>
        <span className={styles.label}>What I've Built</span>
        <h2 className={styles.title}>Academic <span>Projects</span></h2>
        <div className={styles.line}></div>
      </div>
      <div className={p.grid}>
        {projects.map((pr, i) => (
          <div key={i} className={`${p.card} reveal`}>
            <div className={p.num}>{pr.num}</div>
            <div className={p.title}>{pr.title}</div>
            <p className={p.desc}>{pr.desc}</p>
            <div className={p.tags}>
              {pr.tags.map(t => <span key={t} className={p.tag}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
