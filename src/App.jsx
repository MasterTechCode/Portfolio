import { Routes, Route } from 'react-router-dom'
import NavbarComponent from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import ProjectsLayout from './pages/ProjectsLayout'
import ProjectsDetail from './pages/ProjectsDetail'
import { ThemeProvider } from './context/ThemeContext'
import ParticlesBackground from './components/ParticlesBackground'

function App() {
  return (
    <ThemeProvider>  
      <ParticlesBackground />
      <div className="app-container">
        <NavbarComponent />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            
            <Route path="/projects" element={<ProjectsLayout />}>
              <Route index element={<Projects />} />
              <Route path=":projectId" element={<ProjectsDetail />} />
            </Route>

            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h1>404 - Page Not Found</h1>} />
          </Routes>
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App