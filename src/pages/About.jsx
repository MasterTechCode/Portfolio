function About() {
  return (
    <div data-aos="fade-right" data-aos-duration="1000" className="about-page">
      <h1 className="about-title" style={{textAlign:"center"}}>About Me</h1>
      
      <div className="about-card hero-section">
        <p className="about-lead">
          Hi, I'm <strong className="highlight">Elshodbek Muxtorov</strong>, a 15-year-old aspiring Software Engineer from Tashkent, Uzbekistan.
        </p>
        <p>
          I've been learning Frontend Development for the past 2 years while managing school, IELTS preparation, and Olympiads.
        </p>
        <p>
          My big goal is to get a full scholarship in Computer Science or Software Engineering abroad.
          I am also preparing for the <span className="highlight-alt">“Prezident iqtidorli farzandlari”</span> program.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-card section-box">
          <h2>What Drives Me</h2>
          <ul className="about-list">
            <li><span>✦</span> Building useful and beautiful web applications</li>
            <li><span>✦</span> Solving problems with code</li>
            <li><span>✦</span> Continuous self-learning</li>
            <li><span>✦</span> Representing Uzbekistan in tech</li>
          </ul>
        </div>

        <div className="about-card section-box">
          <h2>Currently Learning</h2>
          <ul className="about-list learning-list">
            <li><span className="dot"></span> React Router</li>
            <li><span className="dot"></span> Tailwind CSS</li>
            <li><span className="dot"></span> State Management (Zustand)</li>
            <li><span className="dot"></span> Working with APIs</li>
          </ul>
        </div>
      </div>

      <p className="about-footer-text">I'm always eager to learn more and open to new opportunities.</p>
    </div>
  )
}

export default About