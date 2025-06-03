export default function Portfolio() {
  return (
    <main className="main-content">
      <h1 className="page-title custom-title">My Work</h1>
      <p className="portfolio-message" style={{ marginBottom: "2rem" }}>
        Writing, web apps, design, and more - because why stick to one thing?
      </p>
      {/* Notion Portfolio */}
      <div className="portfolio-card" style={{ marginBottom: "2.5rem", padding: "1.5rem 0" }}>
        <a
          className="portfolio-link"
          href="https://terrific-ironclad-378.notion.site/Professional-Portfolio-Danielle-Bronson-1d7ce21240c280b6bc4ddcaf3a726e2b"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: 600, fontSize: "1.1rem" }}
        >
          View my slightly-less-impressive-but-still-cool portfolio on Notion (includes dev work, editing, and more)
        </a>
      </div>
      {/* Portfolio Grid */}
      <div style={{
        display: "grid",
        gap: "2rem",
        gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
        maxWidth: 1000,
        margin: "0 auto"
      }}>
        {/* D&D Tavern Intro */}
        <div className="portfolio-card" style={{ background: "rgba(255,255,255,0.04)", borderRadius: 14, padding: 18, boxShadow: "0 2px 8px rgba(0,0,0,0.07)" }}>
          <img src="/timothy-dykes-woE5Fc1HF1o-unsplash.jpg" alt="D&D dice" style={{ width: "100%", borderRadius: 8, marginBottom: 12 }} />
          <h2 className="custom-title" style={{ fontSize: "1.35rem" }}>Tavern Intro for Beginner DMs</h2>
          <p style={{ margin: "10px 0" }}>A one-shot intro for new Dungeon Masters. Perfect for your first adventure night.</p>
          <a className="portfolio-link" href="https://drive.google.com/file/d/11-vxFo2iypqdiRmNgaROuJz0ULQbp0kh/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Read or Download</a>
        </div>
        {/* Culinary Portfolio */}
        <div className="portfolio-card" style={{ background: "rgba(255,255,255,0.04)", borderRadius: 14, padding: 18, boxShadow: "0 2px 8px rgba(0,0,0,0.07)" }}>
          <img src="/round-icons-heUzTVoahoE-unsplash.jpg" alt="Chef icon" style={{ width: "100%", borderRadius: 8, marginBottom: 12 }} />
          <h2 className="custom-title" style={{ fontSize: "1.35rem" }}>Culinary Visual Portfolio</h2>
          <p style={{ margin: "10px 0" }}>Please don't steal these photos or the chef will kill me. Styled and shot in Canva.</p>
          <a className="portfolio-link" href="https://www.canva.com/design/DAGpPMekbZg/rmYhB15FljDU19IUiRSrpQ/edit?utm_content=DAGpPMekbZg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" rel="noopener noreferrer">View Gallery</a>
        </div>
        {/* "Clickbait" Articles */}
        <div className="portfolio-card" style={{ background: "rgba(255,255,255,0.04)", borderRadius: 14, padding: 18, boxShadow: "0 2px 8px rgba(0,0,0,0.07)" }}>
          <img src="/ruliff-andrean-czRvgj_CZD4-unsplash.jpg" alt="Red carpet illustration" style={{ width: "100%", borderRadius: 8, marginBottom: 12 }} />
          <h2 className="custom-title" style={{ fontSize: "1.35rem" }}>Celebrity & Health/Nutrition Clickbait</h2>
          <p style={{ margin: "10px 0" }}>Clickbait: Because a girl's gotta eat.</p>
          <a className="portfolio-link" href="https://drive.google.com/drive/folders/1r0oCgYSnCFjiky2_0BpkgzS1OrkO33Lo?usp=drive_link" target="_blank" rel="noopener noreferrer">Read the Articles</a>
        </div>
        {/* Unemployment Article */}
        <div className="portfolio-card" style={{ background: "rgba(255,255,255,0.04)", borderRadius: 14, padding: 18, boxShadow: "0 2px 8px rgba(0,0,0,0.07)" }}>
          <img src="/ccf744de-6c89-44d5-9fac-7a17580ec25a.png" alt="Unemployment Rate graphic" style={{ width: "100%", borderRadius: 8, marginBottom: 12 }} />
          <h2 className="custom-title" style={{ fontSize: "1.35rem" }}>The True Unemployment Rate</h2>
          <p style={{ margin: "10px 0" }}>A hard left after the clickbait.</p>
          <a className="portfolio-link" href="https://medium.com/@dbronsonart/what-the-unemployment-rate-leaves-out-cea59253bef9" target="_blank" rel="noopener noreferrer">Read on Medium</a>
        </div>
        {/* Meme-Style Comic */}
        <div className="portfolio-card" style={{ background: "rgba(255,255,255,0.04)", borderRadius: 14, padding: 18, boxShadow: "0 2px 8px rgba(0,0,0,0.07)" }}>
          <img src="/brest1.png" alt="Doge history comic" style={{ width: "100%", borderRadius: 8, marginBottom: 12 }} />
          <h2 className="custom-title" style={{ fontSize: "1.35rem" }}>Historical Meme Comic</h2>
          <p style={{ margin: "10px 0" }}>Created for a YouTube channel that stopped making content almost immediately afterwards. Hopefully unrelated.</p>
          <a className="portfolio-link" href="https://drive.google.com/drive/folders/1r0oCgYSnCFjiky2_0BpkgzS1OrkO33Lo?usp=drive_link" target="_blank" rel="noopener noreferrer">View Comic</a>
        </div>
        {/* E-Commerce Website */}
        <div className="portfolio-card" style={{ background: "rgba(255,255,255,0.04)", borderRadius: 14, padding: 18, boxShadow: "0 2px 8px rgba(0,0,0,0.07)" }}>
          <img src="/Screenshot 2025-06-02 231935.png" alt="FakeStore Screenshot" style={{ width: "100%", borderRadius: 8, marginBottom: 12 }} />
          <h2 className="custom-title" style={{ fontSize: "1.35rem" }}>Full E-Commerce Website</h2>
          <p style={{ margin: "10px 0" }}>React + Fakestore API. Full-featured, fully functional, very pink.</p>
          <a className="portfolio-link" href="https://ecommerce-app-flame-nine.vercel.app/" target="_blank" rel="noopener noreferrer">Visit Website</a>
        </div>
      </div>
    </main>
  );
}

