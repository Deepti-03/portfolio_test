import { useEffect, useRef } from 'react'
import styles from './Section.module.css'
import w from './Workshops.module.css'

const workshops = [
  { emoji: 'AI', title: 'Generative AI Mastermind', desc: 'Hands-on workshop exploring the principles and applications of Generative AI technologies and modern AI tools.' },
  { emoji: 'QC', title: 'Quantum Computing & Quantum AI', desc: 'Workshop on Quantum Computing and Quantum AI using IBM Quantum platforms and tools.' },
]

export default function Workshops() {
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(els => {
      els.forEach(el => { if (el.isIntersecting) { el.target.classList.add('visible'); obs.unobserve(el.target) } })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
  return (
    <section id='workshops' className={styles.section} ref={ref}>
      <div className={`${styles.header} reveal`}>
        <span className={styles.label}>Continuous Learning</span>
        <h2 className={styles.title}>Work<span>shops</span></h2>
        <div className={styles.line}></div>
      </div>
      <div className={w.grid}>
        {workshops.map((ws, i) => (
          <div key={i} className={`${w.card} reveal`}>
            <div className={w.emoji}>{ws.emoji}</div>
            <h3>{ws.title}</h3>
            <p>{ws.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
