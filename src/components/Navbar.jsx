import { useState, useEffect } from "react"
import styles from "./Navbar.module.css"

const links = [
  { href: "about", label: "About" },
  { href: "education", label: "Education" },
  { href: "skills", label: "Skills" },
  { href: "projects", label: "Projects" },
  { href: "research", label: "Research" },
  { href: "certifications", label: "Certs" },
  { href: "contact", label: "Contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("")

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = document.querySelectorAll("section[id]")
      let current = ""
      sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 200) current = sec.id
      })
      setActive(current)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo}>DS</div>
      <ul className={styles.links}>
        {links.map(l => (
          <li key={l.href}>
            <button
              className={`${styles.link} ${active === l.href ? styles.active : ""}`}
              onClick={() => scrollTo(l.href)}
            >
              {l.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
