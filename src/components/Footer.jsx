const Footer = ({ whatsappLink, onDonateClick }) => {
  return (
    <footer
      style={{
        background: '#0f172a',
        color: '#E2E8F0',
        padding: '2rem 1.5rem',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        marginTop: '2.5rem'
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.5rem',
          marginBottom: '1.75rem'
        }}
      >
        {/* Brand Column */}
        <div style={{ gridColumn: '1 / 2' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', marginBottom: '1rem' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: '#22c55e',
                display: 'grid',
                placeItems: 'center',
                color: '#0f172a',
                fontWeight: 800,
                fontSize: '0.95rem'
              }}
            >
              AK
            </div>
            <div>
              <p style={{ margin: 0, fontWeight: 800, fontSize: '1.05rem', color: '#F8FAFC' }}>Al-Karim</p>
              <p style={{ margin: '0.25rem 0 0', color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.4 }}>
                Youth-led faith organization.
              </p>
            </div>
          </div>
        </div>

        {/* Links Column */}
        <div>
          <p style={{ margin: '0 0 0.75rem', fontWeight: 700, color: '#F8FAFC', fontSize: '0.95rem' }}>Navigate</p>
          <div style={{ display: 'grid', gap: '0.5rem' }}>
            <a href="#home" style={{ color: '#E2E8F0', textDecoration: 'none', fontSize: '0.9rem' }}>Home</a>
            <a href="#mission" style={{ color: '#E2E8F0', textDecoration: 'none', fontSize: '0.9rem' }}>About</a>
            <a href="#impact" style={{ color: '#E2E8F0', textDecoration: 'none', fontSize: '0.9rem' }}>Programs</a>
            <a href="#donate" style={{ color: '#E2E8F0', textDecoration: 'none', fontSize: '0.9rem' }}>Donate</a>
          </div>
        </div>

        {/* Connect Column */}
        <div>
          <p style={{ margin: '0 0 0.75rem', fontWeight: 700, color: '#F8FAFC', fontSize: '0.95rem' }}>Connect</p>
          <div style={{ display: 'grid', gap: '0.5rem' }}>
            <a href={whatsappLink} target="_blank" rel="noreferrer" style={{ color: '#22c55e', fontWeight: 700, fontSize: '0.9rem' }}>WhatsApp</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ color: '#E2E8F0', textDecoration: 'none', fontSize: '0.9rem' }}>Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" style={{ color: '#E2E8F0', textDecoration: 'none', fontSize: '0.9rem' }}>Twitter</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{ color: '#E2E8F0', textDecoration: 'none', fontSize: '0.9rem' }}>Facebook</a>
          </div>
        </div>

        {/* CTA Column */}
        <div style={{ display: 'grid', gap: '0.65rem', alignContent: 'flex-start' }}>
          <button
            type="button"
            onClick={onDonateClick}
            style={{
              padding: '0.85rem 1.1rem',
              background: '#22c55e',
              color: '#0f172a',
              fontWeight: 800,
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '0.95rem',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => (e.target.style.background = '#16a34a')}
            onMouseLeave={(e) => (e.target.style.background = '#22c55e')}
          >
            Donate
          </button>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            style={{
              padding: '0.85rem 1.1rem',
              background: 'rgba(255,255,255,0.08)',
              color: '#E2E8F0',
              fontWeight: 700,
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '0.95rem',
              textDecoration: 'none',
              textAlign: 'center',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.12)'
              e.target.style.borderColor = 'rgba(255,255,255,0.2)'
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.08)'
              e.target.style.borderColor = 'rgba(255,255,255,0.12)'
            }}
          >
            Join WhatsApp
          </a>
        </div>
      </div>

      {/* Divider and Copyright */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.25rem', textAlign: 'center', color: '#94a3b8', fontSize: '0.9rem' }}>
        © {new Date().getFullYear()} Al-Karim. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
