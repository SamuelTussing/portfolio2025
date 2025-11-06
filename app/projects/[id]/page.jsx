import Link from "next/link"
import Image from "next/image"
import "../../styles/portfolio.css"

const projectsData = {
  1: {
    title: "StarterCarrosserie",
    description:
      "Création d'une boutique ecommerce sous wordpress, woocommerce",
    longDescription:
      "Création d'une boutique ecommerce spécialisée dans la vente de consommables pour carrossiers. Site réalisé sous wordpress et woocommerce avec intégration d'un système de paiement monetico",
    image: "/starter.webp",
    technologies: ["Wordpress","PHP","SEO"],
    features: [
      "Création de la maquette du site",
      "Intégration du système de paiement",
      "Création d'un module personnalisé en PHP",
      "Création de contenu SEO",
      "Optimisation des images",
    ],
    link: "https://startercarrosserie.com/",

  },
  2: {
    title: "Dinitrol",
    description:
      "Création d'une boutique ecommerce sous wordpress",
    longDescription:
      "Création du site ecommerce BtoB de la marque sous wordpress, woocommerce. Création de la maquette avant intégration. Imports de plus de 800 produits, optimisation des images et des textes.",
    image: "/dinitrol.webp",
    technologies: ["Wordpress","PHP","SEO"],
    features: [
      "Création de la maquette du site",
      "Intégration du système de paiement",
      "Création d'un module personnalisé en PHP",
      "Création de contenu SEO",
      "Optimisation des images",
    ],
    link: "https://dinitrol.fr/",
  },
  3: {
    title: "Fungames",
    description:
      "Migration du site vers Prestashop. Refonte du site web",
    longDescription:
      "Migration de la boutique ecommerce de thirtybees vers Prestashop. Création de la maquette et intégration de celle-ci. Import et optimisation des catégories et des fiches produits.",
    image: "/fungames.webp",
    technologies: ["Prestashop","UX","UI","SEO"],
    features: [
      "Création de la maquette du site",
      "Refonte de la partie front",
      "Création d'un module personnalisé en PHP",
      "Création de contenu SEO",
      "Optimisation des images",
    ],
    link: "https://fungamesnet.fr/",
  },
  4: {
    title: "Univers Quantic Shop",
    description: "Création de contenu optimisé SEO, refonte du site sous Prestashop",
    longDescription:
      "Boutique en ligne Prestashop. Création de contenu optimisé. Optimisation des fiches produits existantes. Optimisation du site en retravaillant les images.",
    image: "/UQS-mockup.webp",
    technologies: ["Prestashop","SEO"],
    features: [
      "SEO",
      "Création de contenu",
      "Refonte de la partie front",
      "Optimisation des images",
    ],
    link: "https://www.univers-quantic-shop.com/",
  },
  5: {
    title: "Travel App",
    description: "Création d'un site One page sous NextJs",
    longDescription:
      "Projet personnel de création d'un site web responsive sous NextJs.",
    image: "/api-documentation-interface.png",
    technologies: ["NextJS","TypeScript","Tailwind","Git","Github"],
    features: [
      "Site responsive",
      "NextJs",
      "TypeScript",
      "Tailwind"
    ],
    link: "https://travel-2oi1g5g1o-samuel-tussings-projects.vercel.app/",
    github: "https://github.com/SamuelTussing/travel-app",
  },
  6: {
    title: "Aikido de la Zorn",
    description: "Création d'un site web pour l'association d'Aïkido de Schwindratzheim ",
    longDescription:
      "Création de la maquette, refonte du site web existant. Optimisation des images",
    image: "/aikido.webp",
    technologies: ["Javascript","HTML5","CSS","PHP","Figma","Codeberg","Git"],
    features: [
      "Création de la maquette",
      "Refonte du site",
      "Création d'affiches print et web"
    ],
    link: "https://aikido.nohkumado.eu/",
    github: "https://codeberg.org/stussing/aikidoWebSite",
  },
    7: {
    title: "La Cuisine d'Adeline",
    description: "Mise à jour des extensions, débogage, optimisation SEO du site wordpress. Création de logos et d'identités visuelles",
    longDescription:
      "La Cuisine d'Adeline est un blog culinaire qui propose un large choix de recettes de saison. Depuis sa création en 2014, j'ai eu l'occasion de créer et de faire évoluer la charte graphique du site ainsi que le logo. Aujourd'hui je suis le webmaster du site web.",
    image: "/adelinecuisine.webp",
    technologies: ["Wordpress","SEO","Webmastering"],
    features: [
      "Webmastering",
      "SEO",
      "Graphisme",
    ],
    link: "https://www.adeline-cuisine.fr/",
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
