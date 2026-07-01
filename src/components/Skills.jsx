import { useState } from "react"
import skills from "../data/skills"
import "./Skills.css"

const categoryFilters = [
  { value: "all", label: "All" },
  { value: "Frontend", label: "Frontend" },
  { value: "Tools", label: "Tools" },
  { value: "Other", label: "Other" },
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filtered =
    activeCategory === "all"
      ? skills
      : skills.filter((s) => s.category === activeCategory)

  return (
    <section className="skills" id="skills">
      <div className="skills-inner">
        <div className="skills-header" data-reveal>
          <span className="section-tag">🛠️ Skills</span>
          <h2>My Tech Stack</h2>
          <p className="skills-subtitle">
            Technologies and tools I use to build modern web experiences
          </p>
        </div>

        <div className="skills-filters" data-reveal data-reveal-delay="1">
          {categoryFilters.map((cat) => (
            <button
              key={cat.value}
              className={`filter-btn${activeCategory === cat.value ? " active" : ""}`}
              onClick={() => setActiveCategory(cat.value)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filtered.map((skill, i) => (
            <div
              className="skill-card"
              key={skill.name}
              data-reveal
              data-reveal-delay={Math.min(i, 5)}
            >
              <span className="skill-icon">{skill.icon}</span>
              <h3>{skill.name}</h3>
              <div className="skill-bar-wrapper">
                <div
                  className="skill-bar"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <span className="skill-level">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
