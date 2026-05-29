import { Card } from 'react-bootstrap';
import TypedText from '../components/TypedText';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import { useCountUp } from 'react-countup';

function Home() {
    const expCount = useCountUp({ ref: 'counter-exp', start: 0, end: 1, duration: 2, suffix: '+' });
    const projCount = useCountUp({ ref: 'counter-proj', start: 0, end: 3, duration: 2.5, suffix: '+' });
    const clientCount = useCountUp({ ref: 'counter-clients', start: 0, end: 10, duration: 3, suffix: '+' });

    const coreStack = [
        { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "React Router", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
    ];

    return (
        <>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "50px", padding: "100px 20px 80px" }} data-aos="fade-down" data-aos-duration="1000">

                <Card style={{ width: '18rem' }}>
                    <Card.Img
                        variant="top"
                        src="https://i.ibb.co/s9cyBsy9/06b40c47-868e-450c-a024-c8657347a36b.png"
                    />
                    <Card.Body>
                        <Card.Title><strong>Elshodbek Mukhtorov</strong></Card.Title>
                        <Card.Text>
                            <b>15-year-old aspiring Software Engineer from Tashkent, Uzbekistan</b>
                        </Card.Text>

                        <div style={{ display: "flex", gap: "20px", justifyContent: "center", marginTop: "15px" }}>
                            <a href="https://t.me/mrxcyb3r" target="_blank" rel="noopener noreferrer">
                                <img src="https://i.ibb.co/whcdxfm6/Untitled.jpg" alt="Telegram" style={{ height: "35px", width: "35px", borderRadius: "50%" }} />
                            </a>
                            <a href="https://discord.gg/mrx404notfound" target="_blank" rel="noopener noreferrer">
                                <img src="https://i.ibb.co/FqJHDY6t/Untitled.jpg" alt="Discord" style={{ height: "35px", width: "35px", borderRadius: "50%" }} />
                            </a>
                            <a href="https://github.com/MasterTechCode" target="_blank" rel="noopener noreferrer">
                                <img src="https://i.ibb.co/N2qkP8tB/Untitled.png" alt="GitHub" style={{ height: "35px", width: "35px", borderRadius: "50%" }} />
                            </a>
                        </div>
                    </Card.Body>
                </Card>

                <div style={{ maxWidth: "600px" }} data-aos="fade-left" data-aos-duration="1000">
                    <h1 className="developer-title" style={{ fontSize: "3.2rem", marginBottom: "20px", minHeight: "80px" }}>
                        <TypedText />
                    </h1>

                    <p style={{ fontSize: "1.2rem", lineHeight: "1.7", color: "#aaa" }}>
                        I build responsive and user-friendly websites using HTML, CSS, Bootstrap, JavaScript, and TypeScript.
                        Currently learning React and improving my frontend skills.
                    </p>

                    {/* Statistics Section - Now Fully Restored & Safe */}
                    <div className="statistics" style={{ display: "flex", gap: "40px", marginTop: "40px" }}>
                        <div>
                            <h3><span id="counter-exp" /></h3>
                            <p>years of experience</p>
                        </div>
                        <div>
                            <h3><span id="counter-proj" /></h3>
                            <p>projects completed</p>
                        </div>
                        <div>
                            <h3><span id="counter-clients" /></h3>
                            <p>worldwide clients</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Skills Section */}
            <div className="skills" data-aos="fade-up" data-aos-duration="1000">
                <h2>Technical Skills</h2>
                <p>Technologies and tools I work with daily:</p>

                <div className="skills-grid">
                    {coreStack.map((skill, index) => (
                        <div key={index} className="skills-card">
                            <div className="skill-logo">
                                <img src={skill.logo} alt={skill.name} style={{ width: "45px", height: "45px" }} />
                            </div>
                            <h3 className="skill-name">{skill.name}</h3>
                        </div>
                    ))}
                </div>
            </div>

            <br /><br /><br />
            <About />
            <h2 style={{ textAlign: "center", margin: "60px 0 30px" }}>Projects</h2>
            <Projects /><br />
            <h2 style={{ textAlign: "center", margin: "60px 0 30px" }}>Contact me</h2>
            <div style={{ display:"flex",justifyContent:"center",backgroundColor:"#1e1e1e",border:"none"}} className='form-control'>
                <Contact />
            </div>
        </>
    );
}

export default Home;