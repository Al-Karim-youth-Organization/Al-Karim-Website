import SectionHeader from './SectionHeader'

const ValuesSection = ({ values }) => {
  return (
    <section className="section values" id="values">
      <SectionHeader
        eyebrow="Our principles"
        title="Values that shape every interaction"
        description="Every action we take is guided by core values that inspire learning, service, and faith. They define who we are and how we engage with the community."
      />
      <div className="grid three">
        {values.map((value) => (
          <div className="card" key={value.title}>
            <p className="eyebrow">{value.tag}</p>
            <p>{value.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ValuesSection
