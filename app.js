const { HashRouter, Routes, Route, Link } = ReactRouterDOM;

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo"><Link to="/">MP</Link></h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <section className="hero">
      <h2>Hi, I'm Mitchell</h2>
      <p>Software Developer</p>
    </section>
  );
}

function About() {
  return (
    <section className="content">
      <h2>About Me</h2>
      <p>I am a software developer with a passion for creating clean and efficient solutions.</p>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
    </div>
  );
}

function Portfolio() {
  const [projects, setProjects] = React.useState([]);

  React.useEffect(() => {
    fetch('projects.json')
      .then((res) => res.json())
      .then(setProjects)
      .catch(console.error);
  }, []);

  return (
    <section className="content">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </HashRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
