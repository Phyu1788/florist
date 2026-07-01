import { useState, useMemo } from "react"
import projects from "../data/projects"
import ProjectCard from "./ProjectCard"
import "./Projects.css"

const categories = [
  { value: "all", label: "All", icon: "🚀" },
  { value: "React", label: "React", icon: "⚛️" },
  { value: "Full Stack", label: "Full Stack", icon: "🔧" },
  { value: "UI/UX", label: "UI/UX", icon: "🎨" },
]

export default function Projects({ onProjectClick }) {
  const [searchText, setSearchText] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProjects = useMemo(() => {
    const query = searchText.toLowerCase().trim()
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === "all" || project.category === activeCategory
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.techStack.some((t) => t.toLowerCase().includes(query))
      return matchesCategory && matchesSearch
    })
  }, [searchText, activeCategory])

  return (
    <section className="projects" id="projects">
      <div className="projects-header" data-reveal>
        <span className="section-tag">💼 My Work</span>
        <h2>Featured Projects</h2>
        <p>A selection of things I've built and worked on</p>
      </div>

      <div className="projects-controls" data-reveal data-reveal-delay="1">
        <div className="search-wrapper">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="search-input"
            placeholder="Search projects or tech..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div className="category-filters">
          {categories.map((cat) => (
            <button
              key={cat.value}
              className={`filter-btn${activeCategory === cat.value ? " active" : ""}`}
              onClick={() => setActiveCategory(cat.value)}
            >
              <span className="filter-icon">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {filteredProjects.length > 0 ? (
        <div className="projects-grid">
          {filteredProjects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={onProjectClick}
              delay={i}
            />
          ))}
        </div>
      ) : (
        <div className="no-results">
          <span className="no-results-icon">🔍</span>
          <p>No projects found matching your search.</p>
          <button
            className="clear-btn"
            onClick={() => {
              setSearchText("")
              setActiveCategory("all")
            }}
          >
            Clear filters
          </button>
        </div>
      )}
    </section>
  )
}
