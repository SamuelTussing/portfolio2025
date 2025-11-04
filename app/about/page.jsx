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
                Développeur web passionné avec plusieurs années d`&apos`expérience dans la création d`&apos`applications web
                modernes et performantes. Je me spécialise dans le développement full stack avec un focus particulier
                sur l`&apos`expérience utilisateur et la qualité du code.
              </p>
              <p className="text-paragraph">
                Mon approche combine créativité et rigueur technique pour transformer des idées en solutions digitales
                concrètes. J`&apos`aime relever des défis complexes et apprendre continuellement de nouvelles technologies.
              </p>

              <h2 className="section-subtitle">Mon parcours</h2>
              <p className="text-paragraph">
                Après une formation en développement web, j`&apos`ai travaillé sur divers projets allant de sites vitrine à
                des applications web complexes. Chaque projet m`&apos`a permis d`&apos`affiner mes compétences et d`&apos`élargir ma
                compréhension des besoins utilisateurs.
              </p>

              <h2 className="section-subtitle">Contact</h2>
              <div className="contact-links">
                <a href="mailto:contact@example.com" className="contact-link">
                  📧 sml.tussing@gmail.com
                </a>
                <a href="https://github.com/SamuelTussing" target="_blank" rel="noopener noreferrer" className="contact-link">
                  🔗 GitHub
                </a>
                <a href="https://fr.linkedin.com/in/samuel-tussing-a4a178b4" target="_blank" rel="noopener noreferrer" className="contact-link">
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
