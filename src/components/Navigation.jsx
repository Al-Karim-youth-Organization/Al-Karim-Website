import logo from '../assets/logo.png'

const Navigation = ({ onDonateClick, whatsappLink }) => {
  return (
    <header className="navbar" id="top">
      <div className="brand">
        <img src={logo} alt="Al-Karim Logo" className="brand-mark" />
        <span className="brand-text">Al-Karim</span>
      </div>
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#impact">Impact</a>
        <a href="#donate">Donate</a>
        <a href="#join">Join</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="nav-actions">
        <a className="ghost-button" href={whatsappLink} target="_blank" rel="noreferrer">
          WhatsApp
        </a>
        <button className="primary-button" type="button" onClick={onDonateClick}>
          Donate
        </button>
      </div>
    </header>
  )
}

export default Navigation
