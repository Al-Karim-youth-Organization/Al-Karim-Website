import SectionHeader from './SectionHeader'

const FAQSection = ({ faqs }) => {
  return (
    <section className="section" id="faq">
      <SectionHeader
        eyebrow="Trust and clarity"
        title="Questions We Are Asked Most"
        description="Transparency matters. Here are the answers visitors look for before they give or join."
      />
      <div className="accordion">
        {faqs.map((faq) => (
          <details key={faq.question}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

export default FAQSection
