import styles from './BgOrbs.module.css'
export default function BgOrbs() {
  return (
    <div className={styles.wrap}>
      <div className={`${styles.orb} ${styles.orb1}`}></div>
      <div className={`${styles.orb} ${styles.orb2}`}></div>
      <div className={`${styles.orb} ${styles.orb3}`}></div>
    </div>
  )
}
