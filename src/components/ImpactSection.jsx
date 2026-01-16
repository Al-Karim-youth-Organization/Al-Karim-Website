import SectionHeader from './SectionHeader'

const ImpactSection = ({ projects }) => {
  return (
    <section className="section" id="impact">
      <SectionHeader
        eyebrow="Impact"
        title="Current and planned projects"
        description="We focus on actions that move quickly and are easy to track. Each project ties back to our core goals."
      />
      <div className="grid three">
        {projects.map((project, index) => (
          <div className="card" key={project.title}>
            <img 
              src={`https://via.placeholder.com/400x300/1B4332/FFFFFF?text=Project+${index + 1}`}
              alt={project.title}
              style={{ 
                width: '100%', 
                height: 'auto', 
                borderRadius: '2px',     /* Sharp 2px edge */
                marginBottom: '1rem',
                aspectRatio: '4/3',
                objectFit: 'cover',
                border: '1px solid #E2E8F0'
              }}
            />
            <div className={`status ${project.status.toLowerCase()}`}>{project.status}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="meta" style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span className="pill">Goal: {project.goal}</span>
              <span className="pill">Focus: {project.focus}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ImpactSection
