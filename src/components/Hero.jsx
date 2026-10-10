import styles from './Hero.module.css'
import profileImg from '../assets/profile.jpeg'

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id='hero' className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.text}>
          <div className={styles.tag}>
            <span className={styles.dot}></span>
            Open to Opportunities
          </div>
          <h1 className={styles.name}>
            Hi, I&apos;m <br />
            <span className={styles.gradient}>Deepti Sri G S</span>
          </h1>
          <p className={styles.subtitle}>B.Tech Information Technology Student</p>
          <p className={styles.desc}>
            Motivated IT student passionate about Python, web development, data science,
            cybersecurity, and emerging technologies. Best Paper Award winner with research
            experience in wireless networks and quantum computing.
          </p>
          <div className={styles.cta}>
            <button className={styles.btnPrimary} onClick={() => scrollTo('projects')}>
              View Projects
            </button>
            <button className={styles.btnSecondary} onClick={() => scrollTo('contact')}>
              Get In Touch
            </button>
          </div>
        </div>
        <div className={styles.imageWrap}>
          <div className={styles.ring}>
            <div className={styles.ringInner}>
              <img src={profileImg} alt='Deepti Sri G S' />
            </div>
          </div>
          <div className={styles.badge + ' ' + styles.badge1}>
            <span>Best Paper Award</span>
          </div>
          <div className={styles.badge + ' ' + styles.badge2}>
            <span>IT Student 2025-2029</span>
          </div>
        </div>
      </div>
    </section>
  )
}
