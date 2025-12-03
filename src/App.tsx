import './index.css'

function App() {
  return (
    <main className="container">
      <div className="profile-card">
        <header className="header">
          <h1 className="name">Josef Hádek</h1>
          <p className="tagline">seeking efficiency and views<br />🥾🌿🧑‍💻⚜️☀️</p>
        </header>

        <section className="info-section">
          <h2>Stu(dying) at</h2>
          <ul className="education-list">
            <li>
              <a href="https://pef.czu.cz/" target="_blank" rel="noopener noreferrer" className="text-link">
                CZU - Faculty of Economics and Management
              </a>
            </li>
            <li>
              <a href="https://fis.vse.cz/" target="_blank" rel="noopener noreferrer" className="text-link">
                VSE - Faculty of Informatics and Statistics
              </a>
            </li>
          </ul>
        </section>

        <section className="info-section">
          <h2>Big fan of</h2>
          <ul className="education-list">
            <li>
              <span>
                <a href="https://www.apple.com/" target="_blank" rel="noopener noreferrer" className="text-link">Apple products</a> & European hiking trails
              </span>
            </li>
          </ul>
        </section>

        <section className="contact-section">
          <h2>Contact</h2>
          <div className="social-links">
            <a href="https://www.instagram.com/josef.hadek/" className="social-link" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
              <span>Instagram</span>
            </a>
            <a href="https://www.linkedin.com/in/josefhadek/" className="social-link" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin"></i>
              <span>LinkedIn</span>
            </a>
            <a href="https://strava.app.link/dVTsESDhNYb" className="social-link" aria-label="Strava">
              <i className="fa-brands fa-strava"></i>
              <span>Strava</span>
            </a>
            <a href="mailto:me@josefhadek.cz" className="social-link" aria-label="Email">
              <i className="fa-solid fa-envelope"></i>
              <span>E-mail</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}

export default App
