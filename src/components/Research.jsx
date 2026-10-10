import { useEffect, useRef } from 'react'
import styles from './Section.module.css'
import r from './Research.module.css'

const papers = [
  {
    icon: 'R1', title: 'Optimization of Energy and Coverage Using Glowworm Swarm in Wireless Network',
    desc: 'Conference paper on energy optimization and coverage enhancement in wireless sensor networks using bio-inspired Glowworm Swarm Optimization algorithms.',
    award: 'Best Paper Award - Symposium 2026, KRCE'
  },
  {
    icon: 'R2', title: 'Role of Choline-Based Ionic Liquids - Beta-Diketoesters - DFT Study',
    desc: 'Interdisciplinary research analyzing the role of choline-based ionic liquids with beta-diketoesters using Density Functional Theory computational study.',
    award: null
  },
]

export default function Research() {
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(els => {
      els.forEach(el => { if (el.isIntersecting) { el.target.classList.add('visible'); obs.unobserve(el.target) } })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
  return (
    <section id='research' className={styles.section} ref={ref}>
      <div className={`${styles.header} reveal`}>
        <span className={styles.label}>My Publications</span>
        <h2 className={styles.title}>Research &amp; <span>Conferences</span></h2>
        <div className={styles.line}></div>
      </div>
      <div className={r.grid}>
        {papers.map((p, i) => (
          <div key={i} className={`${r.card} reveal`}>
            <div className={r.iconBox}>{p.icon}</div>
            <div className={r.content}>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              {p.award && <div className={r.award}>{p.award}</div>}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
