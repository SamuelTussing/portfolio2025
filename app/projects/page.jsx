import Link from "next/link"
import Image from "next/image"
import "../styles/portfolio.css"

export default function ProjectsPage() {
  const projects = [
    {
      id: "1",
      title: "StarterCarrosserie",
      description: "Création d'une boutique ecommerce sous wordpress, woocommerce",
      image: "/starter.webp",
      tags: ["Wordpress","PHP","SEO"],
    },
    {
      id: "2",
      title: "Dinitrol",
      description: "Création d'une boutique ecommerce complète sous wordpress",
      image: "/dinitrol.webp",
      tags: ["Wordpress","PHP","SEO"],
    },
    {
      id: "3",
      title: "Fungames",
      description: "Migration du site vers Prestashop. Refonte du site web",
      image: "/fungames.webp",
      tags: ["Prestashop","UX","UI","SEO"],
    },
    {
      id: "4",
      title: "Univers Quantic Shop",
      description: "Création de contenu optimisé SEO, refonte du site sous Prestashop",
      image: "/UQS-mockup.webp",
      tags: ["Prestashop","SEO"],
    },
    {
      id: "5",
      title: "Travel App",
      description: "Création d'un site One page sous NextJs",
      image: "/api-documentation-interface.png",
      tags: ["NextJS","TypeScript","Tailwind","Git","Github"],
    },
    {
      id: "6",
      title: "Aikido de la Zorn",
      description: "Création d'un site web pour l'association d'Aïkido de Schwindratzheim ",
      image: "/aikido.webp",
      tags: ["Javascript","HTML5","CSS","PHP","Figma","Codeberg","Git"],
    },
        {
      id: "7",
      title: "La Cuisine d'Adeline",
      description: "Mise à jour des extensions, débogage, optimisation SEO du site wordpress. Création de logos et d'identités visuelles",
      image: "/adelinecuisine.webp",
      tags: ["Wordpress","SEO","Webmastering"],
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
