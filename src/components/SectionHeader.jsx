const SectionHeader = ({ eyebrow, title, description, align = 'left' }) => {
  return (
    <div className={`section-header ${align === 'center' ? 'center' : ''}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  )
}

export default SectionHeader
