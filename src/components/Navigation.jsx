import { useState } from 'react'
import logo from '../assets/logo.png'

const Navigation = ({ onDonateClick, whatsappLink }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="navbar" id="top">
      <div className="brand">
        <img src={logo} alt="Al-Karim Logo" className="brand-mark" />
        <span className="brand-text">Al-Karim</span>
      </div>
      <button
        className="mobile-menu-toggle"
        type="button"
        aria-label="Toggle mobile menu"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <span className={mobileMenuOpen ? 'hamburger open' : 'hamburger'}></span>
      </button>
      <nav className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <a href="#home" onClick={handleNavClick}>Home</a>
        <a href="#about" onClick={handleNavClick}>About</a>
        <a href="#impact" onClick={handleNavClick}>Impact</a>
        <a href="#donate" onClick={handleNavClick}>Donate</a>
        <a href="#join" onClick={handleNavClick}>Join</a>
        <a href="#contact" onClick={handleNavClick}>Contact</a>
      </nav>
      <div className={`nav-actions ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <a className="ghost-button" href={whatsappLink} target="_blank" rel="noreferrer" onClick={handleNavClick}>
          WhatsApp
        </a>
        <button className="primary-button" type="button" onClick={() => { handleNavClick(); onDonateClick(); }}>
          Donate
        </button>
      </div>
    </header>
  )
}

export default Navigation
