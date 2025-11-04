import Link from "next/link"
import "./styles/portfolio.css"

export default function HomePage() {
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
          <p className="hero-greeting">Bonjour, je suis</p>
          <h1 className="hero-title">
            Développeur Web
            <span className="gradient-text">Full Stack</span>
          </h1>
          <p className="hero-description">
            Je crée des expériences web modernes et performantes. Passionné par le code propre et les interfaces
            utilisateur intuitives.
          </p>
          <div className="hero-buttons">
            <Link href="/projects" className="btn btn-primary">
              Voir mes projets →
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
