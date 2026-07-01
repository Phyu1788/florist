import "./ProjectDetail.css"

export default function ProjectDetail({ project, onClose }) {
  return (
    <div className="detail-overlay" onClick={onClose}>
      <div className="detail-modal" onClick={(e) => e.stopPropagation()}>
        <button className="detail-close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <div className="detail-image">
          <span className="detail-emoji">{project.emoji}</span>
        </div>

        <div className="detail-body">
          <span className="detail-category">{project.category}</span>
          <h2 className="detail-name">{project.title}</h2>
          <p className="detail-desc">{project.longDescription}</p>

          <div className="detail-tech">
            <h4>Tech Stack</h4>
            <div className="detail-tech-tags">
              {project.techStack.map((tech) => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>

          
        </div>
      </div>
    </div>
  )
}
