import "./ProjectCard.css"

export default function ProjectCard({ project, onClick, delay = 0 }) {
  return (
    <div
      className="project-card"
      onClick={() => onClick(project)}
      data-reveal
      data-reveal-delay={Math.min(delay, 5)}
    >
      <div className="project-image">
        <span className="project-emoji">{project.emoji}</span>
        <span className="project-category">{project.category}</span>
      </div>
      <div className="project-info">
        <h3 className="project-name">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="project-tech">
          {project.techStack.map((tech) => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
