import Link from "next/link"
import Image from "next/image"
import "../../styles/portfolio.css"

const projectsData = {
  1: {
    title: "E-Commerce Moderne",
    description:
      "Une plateforme de vente en ligne complète développée avec les technologies les plus récentes. Le projet inclut un système de panier d'achat, un processus de paiement sécurisé, une gestion des stocks en temps réel, et un tableau de bord administrateur complet.",
    longDescription:
      "Ce projet e-commerce a été conçu pour offrir une expérience utilisateur fluide et intuitive. J'ai mis l'accent sur la performance avec un temps de chargement optimisé, une navigation rapide et un design responsive qui s'adapte à tous les appareils. Le backend robuste gère efficacement les transactions et la gestion des produits.",
    image: "/modern-ecommerce-website.png",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "Redux", "Tailwind CSS"],
    features: [
      "Authentification utilisateur sécurisée",
      "Panier d'achat dynamique",
      "Intégration de paiement Stripe",
      "Gestion des stocks en temps réel",
      "Dashboard administrateur",
      "Système de recherche et filtres avancés",
    ],
    link: "https://example-ecommerce.com",
    github: "https://github.com/username/ecommerce",
  },
  2: {
    title: "Dashboard Analytics",
    description:
      "Interface d'analyse de données interactive permettant de visualiser des métriques complexes à travers des graphiques dynamiques et des tableaux de bord personnalisables.",
    longDescription:
      "Ce dashboard a été développé pour aider les entreprises à prendre des décisions basées sur les données. Il offre une visualisation claire et interactive des KPIs importants, avec la possibilité de créer des rapports personnalisés et d'exporter les données.",
    image: "/analytics-dashboard-dark-theme.png",
    technologies: ["Next.js", "TypeScript", "Chart.js", "PostgreSQL", "Prisma", "TailwindCSS"],
    features: [
      "Graphiques interactifs en temps réel",
      "Tableaux de bord personnalisables",
      "Export de données (PDF, Excel)",
      "Filtres et périodes personnalisés",
      "Mode sombre/clair",
      "Notifications et alertes",
    ],
    link: "https://example-dashboard.com",
    github: "https://github.com/username/dashboard",
  },
  3: {
    title: "Application Mobile",
    description:
      "Application mobile cross-platform pour la gestion de tâches et la productivité, disponible sur iOS et Android.",
    longDescription:
      "Cette application aide les utilisateurs à organiser leur quotidien avec un système de tâches intuitif, des rappels intelligents et une synchronisation cloud. L'interface a été pensée pour être simple et efficace.",
    image: "/mobile-task-management-app.png",
    technologies: ["React Native", "Firebase", "Redux", "Expo", "AsyncStorage"],
    features: [
      "Gestion de tâches avec priorités",
      "Rappels et notifications push",
      "Synchronisation cloud",
      "Mode hors ligne",
      "Catégories personnalisables",
      "Statistiques de productivité",
    ],
    link: "https://example-app.com",
    github: "https://github.com/username/mobile-app",
  },
  4: {
    title: "Blog Personnel",
    description: "Blog moderne avec système de gestion de contenu, commentaires et optimisation SEO.",
    longDescription:
      "Un blog performant construit avec Next.js pour un référencement optimal. Le système de gestion de contenu permet une publication facile d'articles avec support Markdown.",
    image: "/modern-blog-website.jpg",
    technologies: ["Next.js", "Markdown", "Vercel", "MDX", "SEO"],
    features: [
      "Éditeur Markdown",
      "Système de commentaires",
      "Optimisation SEO",
      "Recherche d'articles",
      "Catégories et tags",
      "RSS Feed",
    ],
    link: "https://example-blog.com",
    github: "https://github.com/username/blog",
  },
  5: {
    title: "API REST",
    description: "API REST robuste et sécurisée pour une application de réservation avec authentification JWT.",
    longDescription:
      "Cette API gère l'ensemble des opérations backend d'une plateforme de réservation, avec une architecture scalable et une documentation complète.",
    image: "/api-documentation-interface.png",
    technologies: ["Express", "PostgreSQL", "JWT", "Swagger", "Docker"],
    features: [
      "Authentification JWT",
      "Documentation Swagger",
      "Rate limiting",
      "Validation des données",
      "Tests unitaires",
      "Déploiement Docker",
    ],
    link: "https://api.example.com",
    github: "https://github.com/username/api",
  },
  6: {
    title: "Portfolio Créatif",
    description: "Site portfolio avec animations 3D et effets visuels immersifs utilisant WebGL.",
    longDescription:
      "Un portfolio qui repousse les limites du web design avec des animations 3D fluides et des interactions innovantes.",
    image: "/creative-portfolio-website.png",
    technologies: ["Three.js", "GSAP", "WebGL", "React", "Vite"],
    features: [
      "Animations 3D",
      "Effets parallax",
      "Transitions fluides",
      "Performance optimisée",
      "Design responsive",
      "Interactions innovantes",
    ],
    link: "https://example-portfolio.com",
    github: "https://github.com/username/portfolio",
  },
}

export default function ProjectDetailPage({ params }) {
  const project = projectsData[params.id]

  if (!project) {
    return (
      <div className="page-container">
        <div className="content-section">
          <div className="content-container">
            <h1 className="page-title">Projet non trouvé</h1>
            <Link href="/projects" className="btn btn-primary">
              Retour aux projets
            </Link>
          </div>
        </div>
      </div>
    )
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
            <Link href="/skills" className="nav-link">
              Compétences
            </Link>
            <Link href="/projects" className="nav-link active">
              Projets
            </Link>
          </div>
        </div>
      </nav>

      {/* Project Detail Content */}
      <section className="content-section">
        <div className="content-container fade-in">
          <Link href="/projects" className="back-link">
            ← Retour aux projets
          </Link>

          <h1 className="page-title">{project.title}</h1>

          <div className="project-detail-image">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={1200}
              height={600}
              className="detail-image"
            />
          </div>

          <div className="project-detail-content">
            <div className="detail-section">
              <h2 className="section-subtitle">Description</h2>
              <p className="text-paragraph">{project.description}</p>
              <p className="text-paragraph">{project.longDescription}</p>
            </div>

            <div className="detail-section">
              <h2 className="section-subtitle">Technologies utilisées</h2>
              <div className="tech-tags-list">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag-large">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="detail-section">
              <h2 className="section-subtitle">Fonctionnalités principales</h2>
              <ul className="features-list">
                {project.features.map((feature, index) => (
                  <li key={index} className="feature-item">
                    ✓ {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="project-actions">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Voir le site →
              </a>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Code source
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
