import { useEffect, useRef } from 'react'
import styles from './Section.module.css'
import e from './Education.module.css'

export default function Education() {
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(els => {
      els.forEach(el => { if (el.isIntersecting) { el.target.classList.add('visible'); obs.unobserve(el.target) } })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
  return (
    <section id='education' className={styles.section} ref={ref}>
      <div className={`${styles.header} reveal`}>
        <span className={styles.label}>My Background</span>
        <h2 className={styles.title}>Edu<span>cation</span></h2>
        <div className={styles.line}></div>
      </div>
      <div className={`${e.timeline} reveal`}>
        <div className={e.item}>
          <div className={e.dot}></div>
          <div className={e.card}>
            <div className={e.degree}>B.Tech – Information Technology</div>
            <div className={e.inst}>K. Ramakrishnan College of Technology</div>
            <div className={e.year}>2025 – 2029 · Currently Pursuing</div>
          </div>
        </div>
        <div className={e.item}>
          <div className={e.dot}></div>
          <div className={e.card}>
            <div className={e.degree}>Higher Secondary Certificate (HSC)</div>
            <div className={e.inst}>Chinmaya Vidyalaya Matriculation Higher Secondary School</div>
            <div className={e.year}>Completed</div>
            <span className={e.score}>86%</span>
          </div>
        </div>
      </div>
    </section>
  )
}
