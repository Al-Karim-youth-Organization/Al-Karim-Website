import SectionHeader from './SectionHeader'

const EventsSection = ({ events }) => {
  return (
    <section className="section" id="events">
      <SectionHeader
        eyebrow="Events"
        title="What’s happening"
        description="We prioritize gatherings that drive learning, service, and connection."
      />
      <div className="timeline">
        {events.map((event) => (
          <div className="timeline-item" key={event.title}>
            <div className="timeline-date">{event.date}</div>
            <div className="timeline-card">
              <div className={`status ${event.status.toLowerCase()}`}>{event.status}</div>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <p className="meta">Location: {event.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default EventsSection
