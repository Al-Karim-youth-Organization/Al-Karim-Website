const JoinSection = ({ whatsappLink }) => {
  return (
    <section className="section join" id="join">
      <div className="join-card">
        <p className="eyebrow">Community</p>
        <h2>Join our WhatsApp group in one tap.</h2>
        <p>
          No sign-ups. No waiting. Tap the button and you are in. We share event updates, opportunities to serve, and
          quick wins you can act on immediately.
        </p>
        <div className="cta-row">
          <a className="primary-button" href={whatsappLink} target="_blank" rel="noreferrer">
            Join the WhatsApp Community
          </a>
          <p className="subtle">Direct invite link. Works on mobile and desktop.</p>
        </div>
      </div>
    </section>
  )
}

export default JoinSection
