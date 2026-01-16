const ContactSection = ({ onSubmit, statusMessage }) => {
  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const payload = {
      name: formData.get('name')?.toString() ?? '',
      email: formData.get('email')?.toString() ?? '',
      message: formData.get('message')?.toString() ?? '',
    }
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
            <input name="name" type="text" placeholder="Your name" />
          </label>
          <label className="field">
            <span>Email</span>
            <input name="email" type="email" placeholder="you@example.com" />
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
          <p>hello@al-karim.org</p>
        </div>
        <div className="info-block">
          <p className="eyebrow">Location</p>
          <p>Local/regional chapters; events announced with clear details.</p>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
