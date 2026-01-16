const Footer = ({ whatsappLink, onDonateClick }) => {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <div className="brand-mark">AK</div>
        <div>
          <p className="brand-text">Al-Karim</p>
          <p className="subtle">Built for clarity, trust, and quick action.</p>
        </div>
      </div>
      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#impact">Impact</a>
        <a href="#events">Events</a>
      </div>
      <div className="footer-actions">
        <button className="primary-button" type="button" onClick={onDonateClick}>
          Donate
        </button>
        <a className="ghost-button" href={whatsappLink} target="_blank" rel="noreferrer">
          Join WhatsApp
        </a>
      </div>
    </footer>
  )
}

export default Footer
