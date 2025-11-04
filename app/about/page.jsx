import Link from "next/link"
import "../styles/portfolio.css"

export default function AboutPage() {
  return (
    <div className="page-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-content">
          <Link href="/" className="logo">
            Portfolio
          </Link>
          <div className="nav-links">
            <Link href="/about" className="nav-link active">
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

      {/* About Content */}
      <section className="content-section">
        <div className="content-container fade-in">
          <h1 className="page-title">À propos de moi</h1>

          <div className="about-content">
            <div className="about-text">
              <h2 className="section-subtitle">Qui suis-je ?</h2>
              <p className="text-paragraph">
                Développeur web passionné avec plusieurs années d'expérience dans la création d'applications web
                modernes et performantes. Je me spécialise dans le développement full stack avec un focus particulier
                sur l'expérience utilisateur et la qualité du code.
              </p>
              <p className="text-paragraph">
                Mon approche combine créativité et rigueur technique pour transformer des idées en solutions digitales
                concrètes. J'aime relever des défis complexes et apprendre continuellement de nouvelles technologies.
              </p>

              <h2 className="section-subtitle">Mon parcours</h2>
              <p className="text-paragraph">
                Après une formation en développement web, j'ai travaillé sur divers projets allant de sites vitrine à
                des applications web complexes. Chaque projet m'a permis d'affiner mes compétences et d'élargir ma
                compréhension des besoins utilisateurs.
              </p>

              <h2 className="section-subtitle">Contact</h2>
              <div className="contact-links">
                <a href="mailto:contact@example.com" className="contact-link">
                  📧 contact@example.com
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-link">
                  🔗 GitHub
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-link">
                  🔗 LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
