
import { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const services = [
    { icon: "💻", title: "Web Development", description: "Building modern websites." },
    { icon: "☁️", title: "Cloud Computing", description: "Scalable cloud solutions." },
    { icon: "🚀", title: "DevOps", description: "Automating software delivery." }
  ];

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim()) {
      setMessage("Please enter your name!");
      return;
    }

    setMessage(`Welcome, ${name}! Thanks for contacting us.`);
    setName("");
  }

  return (
    <div className={darkMode ? "app dark" : "app"}>

      <header>
        <h2>TechNova.</h2>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>

        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </header>

      <section className="hero" id="home">
        <h1>Technology for a Better Future</h1>
        <p>Discover innovative solutions for your digital world.</p>
        <a href="#services" className="hero-btn">Explore Services</a>
      </section>

      <section className="about" id="about">
        <h2>About Us</h2>
        <p>
          We create modern digital experiences using
          technology, creativity and innovation.
        </p>
      </section>

      <section className="services" id="services">
        <h2>Our Services</h2>

        <div className="cards">
          {services.map((service, index) => (
            <div className="card" key={index}>
              <h3>{service.icon} {service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <h2>Contact Us</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <button type="submit">Submit</button>
        </form>

        <p>{message}</p>
      </section>

      <footer>
        <p>© 2026 TechNova. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;
