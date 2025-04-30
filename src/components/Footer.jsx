export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="copyright">
          © {currentYear} Danielle Bronson. All rights reserved.
        </div>
        <div className="mood-link">
          <a 
            href="https://www.youtube.com/watch?v=NXfC16rv_fs" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-link"
          >
            Having a hard day?
          </a>
        </div>
      </div>
    </footer>
  );
}