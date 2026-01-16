const Hero = ({ onDonateClick, whatsappLink }) => {
  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <p className="eyebrow">Youth-led. Faith-driven.</p>
        <h1>Building a confident youth community with purpose, service, and trust.</h1>
        <p className="lead">
        Al-Karim brings young people together to learn, serve, and give. We focus on spreading the message of Islam, educating youth on the teachings of the Prophet and the Holy Quran, and making a meaningful impact in the community through visible action
        </p>
        <div className="cta-row">
          <button className="primary-button" type="button" onClick={onDonateClick}>
            Donate with M-Pesa
          </button>
          <a className="secondary-button" href={whatsappLink} target="_blank" rel="noreferrer">
            Join WhatsApp Community
          </a>
        </div>
        <div className="hero-pills">
          <span className="pill">Learn</span>
          <span className="pill">Serve</span>
          <span className="pill">Direct Impact</span>
        </div>
      </div>
      <div className="hero-card">
        <img 
          src="https://via.placeholder.com/600x400/1B4332/FFFFFF?text=Al-Karim+Foundation" 
          alt="Al-Karim Humanitarian Foundation"
          style={{ 
            width: '100%', 
            height: 'auto', 
            borderRadius: '2px',      /* Sharp 2px edge */
            marginBottom: '1.5rem',
            aspectRatio: '3/2',
            objectFit: 'cover',
            border: '1px solid #E2E8F0'
          }}
        />
        <div className="stat">
          <p className="stat-label">Our focus</p>
          <p className="stat-value">Awareness • Serve • Impact</p>
        </div>
        <div className="divider" />
        <div className="hero-highlight">
          <p className="eyebrow">Why it matters</p>
          <p>
          Empowering young people with knowledge and faith helps build a generation that acts with purpose, serves others, and strengthens the community. By learning, practicing, and giving, youth can create real, lasting change in their lives and the world around them.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
