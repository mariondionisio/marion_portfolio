import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Code2,
  Database,
  LayoutDashboard,
  Server,
  ShieldCheck,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  Menu,
  X,
  ChevronUp,
  ExternalLink,
  Layers3,
  Sparkles,
  Github,
} from "lucide-react";
import "./styles.css";
import smashifyHome from "./assets/smashify-home.png";
import nfcBusinessCard from "./assets/nfc-business-card.png";
const buildTypes = [
  ["Web Applications", "Responsive platforms for real-world workflows."],
  ["Business Systems", "Tools that simplify operations and data management."],
  [
    "Healthcare Technology",
    "Secure systems designed around sensitive workflows.",
  ],
  [
    "Digital Products",
    "Interactive websites, NFC experiences and digital identities.",
  ],
];
const projects = [
  [
    "Smashify",
    "Sports • Web Platform",
    "A modern sports platform for discovering games, managing schedules, and connecting players with organized activities.",
    ["React", "JavaScript", "Web App", "UI/UX"],
    "https://smashify-play.com/",
    smashifyHome,
  ],
  [
    "NFC Digital Business Card",
    "Product • Digital Identity",
    "Mobile-first digital profile where one NFC tap or QR scan opens contact details and social actions.",
    ["React", "Vite", "NFC", "QR"],
    "https://mariondionisio.github.io/",
    nfcBusinessCard,
  ],
];
const skills = [
  [
    "Frontend Development",
    "React, JavaScript, responsive UI, reusable components",
    Code2,
  ],
  [
    "Backend Development",
    "Node.js, PHP, Laravel, CodeIgniter, REST APIs",
    Server,
  ],
  [
    "Database Management",
    "MySQL, relational design, queries, data validation",
    Database,
  ],
  [
    "System Design",
    "Business workflows, integrations, architecture, security",
    Layers3,
  ],
  [
    "UI / UX",
    "Mobile-first interfaces, dashboards, accessibility, visual systems",
    LayoutDashboard,
  ],
  [
    "Security",
    "Secure application practices, validation, OWASP-aware development",
    ShieldCheck,
  ],
];
function App() {
  const [menu, setMenu] = useState(false);
  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenu(false);
  };
  const download = () => {
    const t = `MARION H. DIONISIO\nComputer Programmer\n\nEmail: mariondionisio7@gmail.com\nPhone: 0969 318 8682 / 0926 041 5305\nWebsite: https://mariondionisio.github.io/\n\nSkills: React, JavaScript, Node.js, PHP, CodeIgniter, MySQL, System Design, UI/UX, Application Security`;
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([t], { type: "text/plain" }));
    a.download = "Marion-H-Dionisio-Profile.txt";
    a.click();
  };
  return (
    <div className="site">
      <header className="nav">
        <nav className={menu ? "open" : ""}>
          {["Home", "About", "Skills", "Projects", "Contact"].map((x) => (
            <button key={x} onClick={() => go(x.toLowerCase())}>
              {x}
            </button>
          ))}
        </nav>
        <button className="talk" onClick={() => go("contact")}>
          Let's Talk <ArrowUpRight size={15} />
        </button>
        <button className="menu" onClick={() => setMenu(!menu)}>
          {menu ? <X /> : <Menu />}
        </button>
      </header>
      <main>
        <section id="home" className="hero section">
          <div>
            <div className="eyebrow">
              <i /> COMPUTER PROGRAMMER • IT PROFESSIONAL
            </div>
            <h1>
              Building digital
              <br />
              <em>solutions</em> that matter.
            </h1>
            <p>
              I design and develop practical systems that solve real-world
              problems — from healthcare platforms and data workflows to modern
              digital products.
            </p>
            <div className="actions">
              <button className="gold" onClick={() => go("projects")}>
                View Selected Work <ArrowUpRight size={17} />
              </button>
              <button className="ghost" onClick={() => go("contact")}>
                Let's Talk
              </button>
            </div>
            <div className="meta">
              <span>
                <MapPin size={14} /> Philippines
              </span>
              <span>
                <i /> Open to selected projects & collaboration
              </span>
            </div>
          </div>
          <div className="visual">
            <div className="orbit o1" />
            <div className="orbit o2" />
            <div className="portrait">
              <img src="/marion.jpg" alt="Marion H. Dionisio" />
              <div className="caption">
                <small>01</small>
                <div>
                  <b>MARION H. DIONISIO</b>
                  <span>Computer Programmer</span>
                </div>
              </div>
            </div>
            <div className="float f1">
              <Code2 /> Clean Code <b>+</b>
            </div>
            <div className="float f2">
              <Sparkles /> System Design <b>+</b>
            </div>
          </div>
        </section>
        <div className="ticker">
          BUILD <b>✦</b> SOLVE <b>✦</b> IMPROVE
        </div>
        <section id="about" className="section">
          <label>01 — ABOUT</label>
          <div className="two">
            <h2>
              Technology should make things <em>better.</em>
            </h2>
            <div className="copy">
              <p>
                I'm a Computer Programmer who enjoys turning complex
                requirements into reliable, intuitive software. My work spans
                frontend development, backend systems, databases, automation,
                and application security.
              </p>
              <p>
                I care about more than making software work. I focus on making
                it understandable, maintainable, responsive, and useful to the
                people who depend on it.
              </p>
              <button className="link" onClick={download}>
                Download Profile <Download size={15} />
              </button>
            </div>
          </div>
          <div className="stats">
            <div>
              <b>01</b>Problem-solving
              <br />
              mindset
            </div>
            <div>
              <b>02</b>End-to-end
              <br />
              development
            </div>
            <div>
              <b>03</b>Security-conscious
              <br />
              engineering
            </div>
            <div>
              <b>04</b>Mobile-first
              <br />
              experiences
            </div>
          </div>
        </section>
        <section className="section build-section">
          <label>02 — WHAT I BUILD</label>
          <div className="heading">
            <h2>
              Solutions, not just <em>software.</em>
            </h2>
            <p>
              I focus on useful digital experiences that support real workflows,
              people, and organizations.
            </p>
          </div>
          <div className="buildgrid">
            {buildTypes.map(([t, d], i) => (
              <article key={t}>
                <span>0{i + 1}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
        </section>
        <section id="skills" className="section">
          <label>03 — EXPERTISE</label>
          <div className="heading">
            <h2>
              What I <em>work with.</em>
            </h2>
            <p>
              A practical stack built around solving business and organizational
              problems.
            </p>
          </div>
          <div className="skillgrid">
            {skills.map(([t, d, I], i) => (
              <article className="skill" key={t}>
                <small>0{i + 1}</small>
                <I />
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
        </section>
        <section id="projects" className="section">
          <label>04 — SELECTED WORK</label>
          <div className="heading">
            <h2>
              Projects with <em>purpose.</em>
            </h2>
            <p>
              Selected systems and digital products built around real users,
              workflows, and outcomes.
            </p>
          </div>
          <div className="projects">
            {projects.map(([t, type, d, tags, url, image], i) => (
              <article
                className={i < 2 ? "project featured" : "project"}
                key={t}
                onClick={() =>
                  url && window.open(url, "_blank", "noopener,noreferrer")
                }
                onKeyDown={(e) => {
                  if (url && (e.key === "Enter" || e.key === " ")) {
                    e.preventDefault();
                    window.open(url, "_blank", "noopener,noreferrer");
                  }
                }}
                role={url ? "link" : undefined}
                tabIndex={url ? 0 : undefined}
              >
                <div className="projecttop">
                  <small>0{i + 1}</small>
                  {url ? <ExternalLink /> : <span />}
                </div>
                <div className={`art${image ? " has-preview" : ""}`}>
                  {image ? (
                    <img src={image} alt={`${t} website preview`} />
                  ) : (
                    <span>{t}</span>
                  )}
                </div>
                <div className="project-type">{type}</div>
                <div className="projectbody">
                  <h3>{t}</h3>
                  <p>{d}</p>
                  <div>
                    {tags.map((x) => (
                      <span key={x}>{x}</span>
                    ))}
                  </div>
                  {url && (
                    <a
                      className="projectlink"
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Live Project <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="quote">
          <b>“</b>
          <blockquote>Creative solutions for a better tomorrow.</blockquote>
          <small>— Marion H. Dionisio</small>
        </section>
        <section id="contact" className="section">
          <label>05 — CONTACT</label>
          <div className="contact">
            <div>
              <h2>
                Have an idea?
                <br />
                <em>Let's build it.</em>
              </h2>
              <p>
                Whether it's a system, website, automation, or digital product,
                I'm always interested in meaningful problems worth solving.
              </p>
            </div>
            <div className="contacts">
              <a href="tel:+639693188682">
                <Phone />
                <span>
                  PHONE<b>0969 318 8682</b>
                </span>
              </a>
              <a href="mailto:mariondionisio7@gmail.com">
                <Mail />
                <span>
                  WORK EMAIL<b>mariondionisio7@gmail.com</b>
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/marion-dionisio-a42985114"
                target="_blank"
              >
                <Linkedin />
                <span>
                  LINKEDIN<b>Marion Dionisio</b>
                </span>
              </a>
              <a href="https://github.com/mariondionisio" target="_blank">
                <Github />
                <span>
                  GITHUB<b>mariondionisio</b>
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <span>© 2026 Marion H. Dionisio</span>
        <button onClick={() => go("home")}>
          <ChevronUp size={13} /> Back to top
        </button>
      </footer>
    </div>
  );
}
createRoot(document.getElementById("root")).render(<App />);
