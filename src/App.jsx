import { useState } from "react"
import useScrollReveal from "./hooks/useScrollReveal"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ProjectDetail from "./components/ProjectDetail"
import "./App.css"

function App() {
  const [selectedProject, setSelectedProject] = useState(null)
  useScrollReveal()

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects onProjectClick={setSelectedProject} />
        <Contact />
      </main>
      <Footer />
      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  )
}

export default App
