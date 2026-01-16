const ContactSection = ({ onSubmit, statusMessage }) => {
  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const payload = {
      name: formData.get('name')?.toString() ?? '',
      email: formData.get('email')?.toString() ?? '',
      message: formData.get('message')?.toString() ?? '',
    }

    // Build a mailto link so the user's email client sends directly to the organization.
    const subject = 'New inquiry from Al-Karim website'
    const body = `Name: ${payload.name}\nEmail: ${payload.email}\n\nMessage:\n${payload.message}`
    const mailtoLink = `mailto:alkarimmuslimyouthorganization@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(mailtoLink, '_blank')

    onSubmit(payload)
    event.target.reset()
  }

  return (
    <section className="section contact" id="contact">
      <div className="contact-card">
        <p className="eyebrow">Contact</p>
        <h2>Reach out to the team</h2>
        <p>Ask about partnerships, volunteering, or media. We keep replies concise and actionable.</p>
        <form className="form" onSubmit={handleSubmit}>
          <label className="field">
            <span>Name</span>
            <input name="name" type="text" placeholder="Your name" required />
          </label>
          <label className="field">
            <span>Email</span>
            <input name="email" type="email" placeholder="you@example.com" required />
          </label>
          <label className="field">
            <span>Message</span>
            <textarea name="message" rows="4" placeholder="How can we help?" required />
          </label>
          <button className="primary-button" type="submit">Send message</button>
          {statusMessage && <p className="success">{statusMessage}</p>}
        </form>
      </div>
      <div className="contact-info">
        <div className="info-block">
          <p className="eyebrow">WhatsApp (fastest)</p>
          <p>Community updates, volunteering, and quick questions are shared in the group.</p>
        </div>
        <div className="info-block">
          <p className="eyebrow">Email</p>
          <p>alkarimmuslimyouthorganization@gmail.com</p>
        </div>
        <div className="info-block">
          <p className="eyebrow">Location</p>
          <p>Kiamiko and local chapters; events announced with clear details.</p>
        </div>
      </div>

      <div style={{ marginTop: '1.75rem', width: '100%' }}>
        <p className="eyebrow">Map</p>
        <p style={{ marginBottom: '0.5rem' }}>Pinned to Kiamiko for easy directions.</p>
        <div style={{ borderRadius: '10px', overflow: 'hidden', border: '1px solid #E2E8F0', width: '100%', maxWidth: '100%' }}>
          <iframe
            title="Al-Karim map"
            src="https://maps.google.com/maps?q=Kiamiko&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="360"
            style={{ border: 0, display: 'block' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <a href="https://maps.app.goo.gl/jCqB6ecgs2XJSA678" target="_blank" rel="noreferrer" style={{ color: '#1B4332', fontWeight: 700, display: 'inline-block', marginTop: '0.5rem' }}>
          Open in Google Maps
        </a>
      </div>
    </section>
  )
}

export default ContactSection
