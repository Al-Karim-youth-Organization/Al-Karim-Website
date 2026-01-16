import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import MissionSection from './components/MissionSection'
import ValuesSection from './components/ValuesSection'
import ImpactSection from './components/ImpactSection'
import DonateSection from './components/DonateSection'
import JoinSection from './components/JoinSection'
import EventsSection from './components/EventsSection'
import FAQSection from './components/FAQSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import DonateModal from './components/DonateModal'

// Single-page flow keeps navigation and calls to action visible without extra clicks.
const whatsappLink = 'https://chat.whatsapp.com/invite' // Replace with live invite link when ready.
const tillNumber = '123456'

const values = [
  {
    tag: 'Faith',
    title: 'Faith',
    body: 'We uphold the teachings of Islam, guiding youth to strengthen their connection with the Quran and the Prophet\'s example. By fostering understanding, reflection, and practice, we aim to help young people internalize their faith in everyday life and make it the foundation for their actions, decisions, and interactions with others.',
  },
  {
    tag: 'Service',
    title: 'Service',
    body: 'We believe in giving back to the community through meaningful and visible actions that create real impact. By volunteering, supporting social causes, and engaging in community projects, youth learn the importance of compassion, responsibility, and leadership while making their communities stronger and more caring.',
  },
  {
    tag: 'Learning',
    title: 'Learning',
    body: 'We encourage continuous growth, educating youth not only on religious teachings but also on values, character, and practical skills. By combining knowledge with reflection and experience, we empower young people to lead purposeful lives, make informed decisions, and inspire positive change in themselves and those around them.',
  },
]

const projects = [
  {
    status: 'Ongoing',
    title: 'Ramadan Iftar for the Community',
    description: 'Al-Karim raises and contributes funds to host iftar programs at Masjid Quba and Kiamiko. These initiatives provide meals for the less fortunate, including revert brothers, ensuring everyone in the community can break their fast with dignity and togetherness. Through these programs, we foster generosity, unity, and direct positive impact in the lives of those we serve.',
    goal: 'Community meals',
    focus: 'Relief',
  },
  {
    status: 'Ongoing',
    title: 'Weekly Youth Learning Sessions',
    description: 'Every Sunday at Masjid Quba, young people gather to learn and grow through guided lessons on Islam. Sessions cover topics such as the pillars of Islam, Hadith, Fiqh, Sira, and practical teachings from the Prophet\'s life. These gatherings empower youth with knowledge, strengthen their faith, and create a supportive space for personal and spiritual development.',
    goal: 'Weekly attendance',
    focus: 'Education',
  },
]

const events = [
  {
    status: 'Upcoming',
    title: 'Community Service Day',
    date: 'Feb 8, 2026',
    location: 'Local center (TBD)',
    description: 'Hands-on volunteering with clear roles and time slots. Join via WhatsApp for live coordination.',
  },
  {
    status: 'Upcoming',
    title: 'Ramadan Prep Briefing',
    date: 'Mar 1, 2026',
    location: 'Online (WhatsApp Live)',
    description: 'Walkthrough of Iftar campaign goals, donation tags, and volunteer shifts before launch.',
  },
  {
    status: 'Past',
    title: 'Youth Circle: Purpose & Service',
    date: 'Dec 12, 2025',
    location: 'Community Hall',
    description: 'Dialogue on faith-driven action with commitments captured for follow-up.',
  },
]

const faqs = [
  {
    question: 'Where do donations go?',
    answer: 'Funds go to tagged causes (e.g., Iftar, education support) and are logged with amount, reference, and status. No PINs or card data are stored.',
  },
  {
    question: 'How do I join the community?',
    answer: 'Tap the WhatsApp button—no accounts or forms required. You will land directly in the invite flow.',
  },
  {
    question: 'Do I need an account to donate?',
    answer: 'No. Donations are completed inside your M-Pesa experience. This site only displays the official Till Number and captures basic metadata.',
  },
  {
    question: 'Can I volunteer without donating?',
    answer: 'Yes. Join the WhatsApp group to see open roles and timelines. We welcome time, skills, and outreach help.',
  },
]

function App() {
  const [showDonateModal, setShowDonateModal] = useState(false)
  const [contactStatus, setContactStatus] = useState('')

  const handleContactSubmit = (payload) => {
    // Placeholder for Supabase insertion; shows immediate feedback for V1.
    setContactStatus('We received your message. The team will reply soon.')
    console.info('Contact submission', payload)
  }

  const handleDonateClose = (payload) => {
    setShowDonateModal(false)
    if (payload?.amount) {
      // Future: persist donation intent metadata to Supabase.
      console.info('Donation marked as sent', payload)
    }
  }

  return (
    <div className="app-shell">
      <Navigation onDonateClick={() => setShowDonateModal(true)} whatsappLink={whatsappLink} />
      <main>
        <Hero onDonateClick={() => setShowDonateModal(true)} whatsappLink={whatsappLink} />
        <MissionSection />
        <ValuesSection values={values} />
        <ImpactSection projects={projects} />
        <DonateSection onDonateClick={() => setShowDonateModal(true)} tillNumber={tillNumber} />
        <JoinSection whatsappLink={whatsappLink} />
        <EventsSection events={events} />
        <FAQSection faqs={faqs} />
        <ContactSection onSubmit={handleContactSubmit} statusMessage={contactStatus} />
      </main>
      <Footer whatsappLink={whatsappLink} onDonateClick={() => setShowDonateModal(true)} />
      <DonateModal open={showDonateModal} onClose={handleDonateClose} tillNumber={tillNumber} />
    </div>
  )
}

export default App
