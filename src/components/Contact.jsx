import { useEffect, useRef } from 'react'
import styles from './Section.module.css'
import c from './Contact.module.css'

export default function Contact() {
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(els => {
      els.forEach(el => { if (el.isIntersecting) { el.target.classList.add('visible'); obs.unobserve(el.target) } })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
  return (
    <section id='contact' className={`${styles.section} ${c.contact}`} ref={ref}>
      <div className={`${styles.header} reveal`}>
        <span className={styles.label}>Let's Connect</span>
        <h2 className={styles.title}>Get In <span>Touch</span></h2>
        <div className={styles.line}></div>
      </div>
      <p className={`${c.desc} reveal`}>
        I'm currently open to internship opportunities, collaborations, and exciting projects. Feel free to reach out!
      </p>
      <div className={`${c.emailWrap} reveal`}>
        <a href='mailto:gsdeeptisri@gmail.com' className={c.email}>
          gsdeeptisri@gmail.com
        </a>
      </div>
    </section>
  )
}
