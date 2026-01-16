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
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ImpactSection
