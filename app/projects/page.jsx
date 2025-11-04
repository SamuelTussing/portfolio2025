import Link from "next/link"
import Image from "next/image"
import "../styles/portfolio.css"

export default function ProjectsPage() {
  const projects = [
    {
      id: "1",
      title: "E-Commerce Moderne",
      description: "Plateforme de vente en ligne complète avec panier et paiement",
      image: "/modern-ecommerce-website.png",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      id: "2",
      title: "Dashboard Analytics",
      description: "Interface d'analyse de données avec graphiques interactifs",
      image: "/analytics-dashboard-dark-theme.png",
      tags: ["Next.js", "TypeScript", "Chart.js"],
    },
    {
      id: "3",
      title: "Application Mobile",
      description: "App mobile cross-platform pour la gestion de tâches",
      image: "/mobile-task-management-app.png",
      tags: ["React Native", "Firebase", "Redux"],
    },
    {
      id: "4",
      title: "Blog Personnel",
      description: "Blog avec système de commentaires et gestion de contenu",
      image: "/modern-blog-website.jpg",
      tags: ["Next.js", "Markdown", "Vercel"],
    },
    {
      id: "5",
      title: "API REST",
      description: "API robuste pour application de réservation",
      image: "/api-documentation-interface.png",
      tags: ["Express", "PostgreSQL", "JWT"],
    },
    {
      id: "6",
      title: "Portfolio Créatif",
      description: "Site portfolio avec animations et effets 3D",
      image: "/creative-portfolio-website.png",
      tags: ["Three.js", "GSAP", "WebGL"],
    },
  ]

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
            <Link href="/projects" className="nav-link active">
              Projets
            </Link>
          </div>
        </div>
      </nav>

      {/* Projects Content */}
      <section className="content-section">
        <div className="content-container fade-in">
          <h1 className="page-title">Mes Projets</h1>
          <p className="page-subtitle">Découvrez une sélection de mes réalisations récentes</p>

          <div className="projects-grid">
            {projects.map((project) => (
              <Link href={`/projects/${project.id}`} key={project.id} className="project-card">
                <div className="project-image-wrapper">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="project-image"
                  />
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tech-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
