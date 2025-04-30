export default function Contact() {
  return (
    <main className="main-content">
      <h1 className="page-title custom-title">Get In Touch</h1>
      <div className="portfolio-message">
        <p>
          Interested in working together? Have questions about my work?
          You can reach out via email at:
        </p>
        <p style={{ marginTop: '1rem' }}>
          <a href="mailto:main@danidoesstuff.tech" className="portfolio-link">
            main@danidoesstuff.tech
          </a>
        </p>
      </div>
    </main>
  );
}