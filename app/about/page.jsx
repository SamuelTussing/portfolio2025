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
                Je suis Samuel, graphiste de formation et intégrateur web junior, titulaire d`&apos;`une licence en Arts Appliqués et Designs. Ayant débuté ma carrière en tant qu`&apos;`infographiste spécialisé dans l`&apos;`impression, mon parcours s`&apos;`est naturellement orienté vers le domaine du web. Avec ma double compétence de graphiste et intégrateur web, j`&apos;`optimise la conception des applications web, assurant une amélioration significative de leur qualité et un développement fluide. Mon engagement envers l`&apos;`excellence dans le design et le développement web témoigne de ma passion pour l`&apos;`innovation, reflétant ma volonté constante de rester à la pointe des dernières tendances.
              </p>
              <p className="text-paragraph">
                Mon approche combine créativité et rigueur technique pour transformer des idées en solutions digitales
                concrètes. J`&apos;`aime relever des défis complexes et apprendre continuellement de nouvelles technologies.
              </p>

              <h2 className="section-subtitle">Mon parcours</h2>
              <p className="text-paragraph">
                Durant mes collaborations sur des projets PrestaShop, supervisées par un webmaster expérimenté, j`&apos;`ai acquis les fondements du référencement web. Cette compétence stratégique s`&apos;`est révélée cruciale dans la conception de sites visibles et efficaces, illustrant ma capacité à intégrer les principes du marketing en ligne dans mon approche. Animé par le désir de fusionner ces compétences diversifiées, j`&apos;`ai renforcé mes connaissances en entreprenant une formation intensive d`&apos;`Intégrateur Web sur neuf mois avec Openclassrooms, maîtrisant ainsi divers langages et technologies.
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
