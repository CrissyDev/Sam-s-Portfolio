import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

// 1. Reusable Service Card (Using your children/props logic)
function ServiceCard({ title, description, children, stats }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="custom-content">
        {children}
      </div>
      {stats && <div className="stats">{stats}</div>}
    </div>
  );
}

// 2. Main Portfolio Component
function Portfolio() {
  const [theme, setTheme] = useState('light');

  // Theme Toggle
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.setAttribute('data-theme', newTheme);
  };

  // Scroll Reveal Logic
  useEffect(() => {
    const sections = document.querySelectorAll('header, section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: 1,
      title: "UI/UX Design",
      desc: "Creating clean, joyful, and user-centered interfaces in Figma.",
      stats: "Focus: Accessibility & Human-centricity"
    },
    {
      id: 2,
      title: "Web Development",
      desc: "Building interactive, responsive websites using React and modern CSS.",
      stats: "Tech: React, JavaScript, Nothing UI"
    },
    {
      id: 3,
      title: "Brand Identity",
      desc: "Crafting logos and visual systems that stand out.",
      stats: "Success: AppleMall Rebrand"
    }
  ];

  return (
    <div className="container">
      <div className="glyphs"></div>
      
      <div className="toggle" onClick={toggleTheme}>
        {theme === 'light' ? '☀️' : '🌙'}
      </div>

      <header className="visible">
        <h2>SAMANTHA AKINYI</h2>
        <p style={{ fontSize: '2.2rem', marginTop: '2rem' }}>
          UI/UX Designer & Web Developer<br />
          <span className="red">Mombasa → Kenya</span>
        </p>
      </header>

      <section>
        <h2>SERVICES</h2>
        <div className="grid">
          {services.map((service) => (
            <ServiceCard 
              key={service.id} 
              title={service.title} 
              description={service.desc}
              stats={service.stats}
            >
              <p style={{ fontSize: '0.9rem', opacity: 0.6, marginTop: '10px' }}>
                • Custom tailored for your brand
              </p>
            </ServiceCard>
          ))}
        </div>
      </section>

      <footer>
        <p>© 2026 <strong>KaiDesigns</strong> • All rights reserved</p>
      </footer>
    </div>
  );
}

// 3. Render Logic
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>
);