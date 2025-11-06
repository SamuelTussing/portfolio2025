import Link from "next/link"
import "../styles/portfolio.css"

export default function SkillsPage() {
  const skills = {
    frontend: ["React", "Next.js", "JavaScript", "HTML5", "CSS3", "Responsive Design","Wordpress","Prestashop"],
    backend: ["Node.js", "Express", "MongoDB", "REST API"],
    tools: ["Git", "VS Code", "Figma", "npm", "Postman"],
    graphisme: ["Photoshop","Illustrator","Indesign"],
  }

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
            <Link href="/skills" className="nav-link active">
              Compétences
            </Link>
            <Link href="/projects" className="nav-link">
              Projets
            </Link>
          </div>
        </div>
      </nav>

      {/* Skills Content */}
      <section className="content-section">
        <div className="content-container fade-in">
          <h1 className="page-title">Mes Compétences</h1>
          <p className="page-subtitle">
            Technologies et outils que je maîtrise pour créer des applications web performantes
          </p>

          <div className="skills-grid">
            {/* Frontend */}
            <div className="skill-category">
              <h2 className="skill-category-title">
                <span className="skill-icon">🎨</span>
                Frontend
              </h2>
              <div className="skill-badges">
                {skills.frontend.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="skill-category">
              <h2 className="skill-category-title">
                <span className="skill-icon">⚙️</span>
                Backend
              </h2>
              <div className="skill-badges">
                {skills.backend.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* graph */}
            <div className="skill-category">
              <h2 className="skill-category-title">
                <span className="skill-icon">🎨</span>
                Graphisme
              </h2>
              <div className="skill-badges">
                {skills.graphisme.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="skill-category">
              <h2 className="skill-category-title">
                <span className="skill-icon">🛠️</span>
                Outils
              </h2>
              <div className="skill-badges">
                {skills.tools.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
