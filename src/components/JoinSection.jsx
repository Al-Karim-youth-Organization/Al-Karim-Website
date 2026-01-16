const JoinSection = ({ whatsappLink }) => {
  return (
    <section
      className="section join"
      id="join"
      style={{
        position: 'relative',
        background: '#0f172a',
        overflow: 'hidden',
        padding: '4.25rem 1.25rem'
      }}
    >
      {/* Main shell */}
      <div
        style={{
          position: 'relative',
          maxWidth: '940px',
          width: '100%',
          margin: '0 auto',
          background: '#0f172a',
          borderRadius: '18px',
          padding: '3.75rem 3rem',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 18px 48px rgba(0,0,0,0.35)',
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: '2.25rem'
        }}
      >
        {/* Text column */}
        <div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.45rem 0.95rem',
              background: 'rgba(255,255,255,0.08)',
              color: '#E2E8F0',
              borderRadius: '999px',
              fontSize: '0.88rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
              marginBottom: '1rem'
            }}
          >
            <span style={{ fontSize: '1rem' }}>✨</span> Join our WhatsApp
          </div>

          <h2
            style={{
              margin: '0 0 1.1rem',
              fontSize: '2.05rem',
              fontWeight: 800,
              color: '#F8FAFC',
              lineHeight: 1.28
            }}
          >
            Connect with Al-Karim Youth
          </h2>

          <p
            style={{
              margin: '0 0 2rem',
              fontSize: '1.03rem',
              color: '#CBD5E1',
              lineHeight: 1.7,
              maxWidth: '620px'
            }}
          >
            No forms. No delays. Join our WhatsApp community to stay connected with Al-Karim's programs, volunteering opportunities, and faith-based learning. Be part of a youth movement focused on learning, serving, and making a positive impact.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '1rem 2.7rem',
                background: '#22c55e',
                color: '#0f172a',
                fontSize: '1.03rem',
                fontWeight: 800,
                borderRadius: '10px',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 12px 28px rgba(34,197,94,0.25)'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#16a34a'
                e.target.style.boxShadow = '0 14px 30px rgba(34,197,94,0.32)'
                e.target.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#22c55e'
                e.target.style.boxShadow = '0 12px 28px rgba(34,197,94,0.25)'
                e.target.style.transform = 'translateY(0)'
              }}
            >
              Join on WhatsApp
            </a>

            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.6rem 0.95rem',
                background: 'rgba(255,255,255,0.06)',
                color: '#E2E8F0',
                fontSize: '0.92rem',
                fontWeight: 600,
                borderRadius: '999px',
                border: '1px solid rgba(255,255,255,0.08)'
              }}
            >
              <span>⚡</span> One tap • No forms
            </span>
          </div>
        </div>

        {/* Info column */}
        <div
          style={{
            background: 'rgba(15,23,42,0.55)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '14px',
            padding: '1.4rem 1.25rem',
            backdropFilter: 'blur(4px)',
            color: '#E2E8F0',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)'
          }}
        >
          <div style={{ marginBottom: '1.1rem' }}>
            <p style={{ margin: 0, fontSize: '0.95rem', fontWeight: 700, color: '#F8FAFC' }}>Why join?</p>
            <p style={{ margin: '0.35rem 0 0', fontSize: '0.92rem', color: '#cbd5e1' }}>
              Stay in the loop, learn together, and find ways to serve.
            </p>
          </div>

          <div style={{ display: 'grid', gap: '0.65rem' }}>
            {["Community updates", "Volunteer openings", "Faith-based learning", "Youth-led initiatives"]
              .map((item) => (
                <div
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    padding: '0.7rem 0.75rem',
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '10px',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: '#F8FAFC',
                    fontWeight: 600
                  }}
                >
                  <span style={{ color: '#22c55e' }}>•</span> {item}
                </div>
              ))}
          </div>

          <div
            style={{
              marginTop: '1.4rem',
              padding: '0.9rem',
              borderRadius: '10px',
              background: 'rgba(34,197,94,0.08)',
              color: '#bbf7d0',
              border: '1px solid rgba(34,197,94,0.18)',
              fontWeight: 700,
              fontSize: '0.95rem',
              textAlign: 'center'
            }}
          >
            Direct invite • Works on mobile and desktop
          </div>
        </div>
      </div>
    </section>
  )
}

export default JoinSection
