import SectionHeader from './SectionHeader'

const MissionSection = () => {
  return (
    <section className="section" id="about">
      <SectionHeader
        eyebrow="Clarity first"
        title="Mission, Vision, and Values anchored in service"
        description="We keep our language simple and our actions direct. Every visitor should know who we are, what we stand for, and how they can contribute within seconds."
      />
      
      {/* Documentary-style banner image */}
      <img 
        src="https://via.placeholder.com/1200x400/002147/FFFFFF?text=Our+Mission+in+Action" 
        alt="Al-Karim Mission"
        style={{ 
          width: '100%', 
          height: 'auto', 
          borderRadius: '2px',       /* Sharp 2px edge */
          marginBottom: '2rem',
          aspectRatio: '16/9',
          objectFit: 'cover',
          border: '1px solid #E2E8F0'
        }}
      />
      
      <div className="grid two">
        <div className="panel">
          <p className="eyebrow">Mission</p>
          <h3>Empowering Youth Through Faith and Service</h3>
          <p>
          Our mission is to educate and inspire young people about Islam, guide them in the teachings of the Prophet and the Quran, and empower them to serve their communities through meaningful action.
          </p>
        </div>
        <div className="panel">
          <p className="eyebrow">Vision</p>
          <h3>Building a Faithful and Active Generation</h3>
          <p>
          Our vision is to nurture a generation of young people who live by Islamic teachings, contribute positively to their communities, and lead with knowledge, compassion, and purpose.
          </p>
        </div>
      </div>
    </section>
  )
}

export default MissionSection
