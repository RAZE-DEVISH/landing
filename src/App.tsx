import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Github, Linkedin, Mail, Camera, Cloud, Code, Brain, Palette, Terminal, Database, Layers, Cpu, BookOpen } from 'lucide-react'
import './App.css'

function App() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Typing animation state
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    const titles = ["Software Consultant", "Tech Lead", "Cloud Architect", "DevOps Practitioner", "Artist"]
    
    const handleTyping = () => {
      const currentTitle = titles[currentTitleIndex]
      
      if (isDeleting) {
        setCurrentText(currentTitle.substring(0, currentText.length - 1))
        setTypingSpeed(75)
      } else {
        setCurrentText(currentTitle.substring(0, currentText.length + 1))
        setTypingSpeed(150)
      }

      if (!isDeleting && currentText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false)
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentTitleIndex, typingSpeed])

  const skills = [
    { icon: Cloud, name: "Cloud Architecture", color: "#00ff41" },
    { icon: Terminal, name: "DevOps", color: "#00cc33" },
    { icon: Brain, name: "AI & ML", color: "#33ff66" },
    { icon: Code, name: "Full-stack Dev", color: "#66ff99" },
    { icon: Database, name: "Data Engineering", color: "#99ffcc" },
    { icon: Layers, name: "Kubernetes", color: "#00ff88" },
    { icon: Cpu, name: "System Architecture", color: "#44ff77" },
    { icon: Palette, name: "Creative Coding", color: "#77ffaa" }
  ]

  const projects = [
    {
      title: "AI-Assisted Development",
      description: "Mastering GitHub Copilot and prompt engineering techniques",
      tags: ["AI", "GitHub Copilot", "Prompt Engineering"]
    },
    {
      title: "Azure Cloud Architecture",
      description: "Kubernetes clusters deployment with Terraform",
      tags: ["Azure", "Kubernetes", "Terraform", "DevOps"]
    },
    {
      title: "Creative Visualizations",
      description: "Interactive P5.js visualizations and generative art",
      tags: ["P5.js", "Creative Coding", "Visualizations"]
    },
    {
      title: "Technical Leadership",
      description: "Blog posts on cloud adoption, hiring, and technical culture",
      tags: ["Leadership", "Technical Writing", "Culture"]
    }
  ]

  return (
    <div className="app">
      {/* Hero Section */}
      <motion.section 
        className="hero"
        style={{ y, opacity }}
      >
        <div className="hero-bg">
          <motion.div 
            className="floating-shapes"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={`shape-${i}`}
                className="shape"
                initial={{ 
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  scale: 0
                }}
                animate={{ 
                  scale: [0, 1, 0],
                  rotate: [0, 180, 360],
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  delay: Math.random() * 5
                }}
              />
            ))}
          </motion.div>
        </div>
        
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.h1 
              className="hero-title"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              JORGE RAZE
            </motion.h1>
            <motion.div 
              className="hero-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <span className="typed-text">{currentText}</span>
            </motion.div>
            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              Weaving digital symphonies where code meets creativity and innovation transcends boundaries
            </motion.p>
          </motion.div>

          <motion.div 
            className="social-links"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <motion.a 
              href="https://www.linkedin.com/in/razeonex/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a 
              href="https://github.com/razeone"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={24} />
            </motion.a>
            <motion.a 
              href="https://blog.raze.mx"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <BookOpen size={24} />
            </motion.a>
            <motion.a 
              href="mailto:hello@raze.mx"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail size={24} />
            </motion.a>
            <motion.a 
              href="https://www.flickr.com/photos/razeone/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Camera size={24} />
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        className="skills"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Expertise & Passion
        </motion.h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: `0 20px 40px ${skill.color}33`
              }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="skill-icon"
                style={{ color: skill.color }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <skill.icon size={32} />
              </motion.div>
              <h3>{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        className="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Featured Work
        </motion.h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <motion.span 
                    key={tag} 
                    className="tag"
                    whileHover={{ scale: 1.1 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        className="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Let's Create Something Amazing</h2>
          <p>Ready to bring your ideas to life with cutting-edge technology?</p>
          <motion.a 
            href="mailto:hello@raze.mx"
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </motion.section>
    </div>
  )
}

export default App
