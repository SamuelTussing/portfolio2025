"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import "./styles/portfolio.css"

export default function HomePage() {
  const titles = ["Développeur web", "Graphiste", "Infographiste", "Curieux", "Référenceur SEO"]
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(100)

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex]

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        if (displayedText.length < currentTitle.length) {
          setDisplayedText(currentTitle.substring(0, displayedText.length + 1))
          setTypingSpeed(100)
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(currentTitle.substring(0, displayedText.length - 1))
          setTypingSpeed(50)
        } else {
          // Finished deleting, move to next title
          setIsDeleting(false)
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length)
        }
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [displayedText, isDeleting, currentTitleIndex, typingSpeed, titles])

  return (
    <div className="page-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-content">
          <Link href="/" className="logo">
            Portfolio
          </Link>
          <div className="nav-links">
            <Link href="/about" className="nav-link">
              À propos
            </Link>
            <Link href="/skills" className="nav-link">
              Compétences
            </Link>
            <Link href="/projects" className="nav-link">
              Projets
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content fade-in">
          <div className="hero-images">
            <img src="/hero-portfolio-images.png" alt="Portfolio examples" className="portfolio-gallery" />
          </div>

          <p className="hero-greeting">Bonjour, je suis</p>
          <h1 className="hero-title">
            <span className="typing-text">
              {displayedText}
              <span className="typing-cursor">|</span>
            </span>
          </h1>
          <p className="hero-description">
            Je crée des expériences web modernes et performantes. Passionné par le code propre et les interfaces
            utilisateur intuitives.
          </p>
          <div className="hero-buttons">
            <Link href="/projects" className="btn btn-primary">
              Mes Projets
            </Link>
            <Link href="/about" className="btn btn-secondary">
              En savoir plus
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Features */}
      <section className="features-section">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">💻</div>
            <h3 className="feature-title">Développement</h3>
            <p className="feature-description">Code moderne et maintenable avec les dernières technologies</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3 className="feature-title">Design</h3>
            <p className="feature-description">Interfaces élégantes et expérience utilisateur optimale</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3 className="feature-title">Performance</h3>
            <p className="feature-description">Applications rapides et optimisées pour tous les appareils</p>
          </div>
        </div>
      </section>
    </div>
  )
}
