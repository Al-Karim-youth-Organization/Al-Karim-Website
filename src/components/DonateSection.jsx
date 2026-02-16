import { useState } from 'react'
import SectionHeader from './SectionHeader'

const DonateSection = ({ onDonateClick, tillNumber }) => {
  const [amount, setAmount] = useState('')
  const [customAmount, setCustomAmount] = useState('')
  const [showConfirmation, setShowConfirmation] = useState(false)

  const suggestedAmounts = [500, 1000, 2000, 5000]

  const handleDonate = () => {
    const finalAmount = amount === 'custom' ? customAmount : amount
    if (finalAmount && finalAmount > 0) {
      setShowConfirmation(true)
      setTimeout(() => setShowConfirmation(false), 4000)
      onDonateClick()
    }
  }

  return (
    <section className="section donate" id="donate">
      <SectionHeader
        eyebrow="Support Us"
        title="Make a difference today"
        description="Your support helps Al-Karim educate youth on the teachings of Islam, foster meaningful community service, and create programs that strengthen faith and character. Every contribution helps us guide young people to learn, serve, and make a positive impact in their communities."
      />

      <div className="donate-form-container">

        {/* Security Badge */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          marginBottom: '1.5rem',
          padding: '0.75rem',
          background: '#F0FDF4',
          borderRadius: '4px',
          border: '1px solid #86EFAC'
        }}>
          <span style={{ fontSize: '1.25rem' }}>🔒</span>
          <span style={{ fontSize: '0.875rem', color: '#166534', fontWeight: '500' }}>
            Secure M-Pesa donation • No passwords stored
          </span>
        </div>

        {/* Till Number Display */}
        <div style={{
          textAlign: 'center',
          padding: '1rem',
          background: '#F8FAFC',
          borderRadius: '4px',
          marginBottom: '1.5rem',
          border: '1px solid #E2E8F0'
        }}>
          <p style={{ margin: '0 0 0.25rem', fontSize: '0.875rem', color: '#64748B' }}>
            M-Pesa Till Number
          </p>
          <p style={{
            margin: 0,
            fontSize: '1.75rem',
            fontWeight: '700',
            color: '#1B4332',
            letterSpacing: '0.05em'
          }}>
            {tillNumber}
          </p>
        </div>

        {/* Amount Selection */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{
            display: 'block',
            marginBottom: '0.75rem',
            fontSize: '0.875rem',
            fontWeight: '600',
            color: '#1E293B'
          }}>
            Select Amount (KES)
          </label>
          <div className="donate-amount-grid">
            {suggestedAmounts.map((amt) => (
              <button
                key={amt}
                type="button"
                onClick={() => {
                  setAmount(amt)
                  setCustomAmount('')
                }}
                style={{
                  padding: '0.875rem',
                  border: amount === amt ? '2px solid #1B4332' : '2px solid #E2E8F0',
                  background: amount === amt ? '#F0FDF4' : '#fff',
                  borderRadius: '4px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: amount === amt ? '#1B4332' : '#475569',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                KES {amt.toLocaleString()}
              </button>
            ))}
          </div>

          {/* Custom Amount */}
          <div>
            <label style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '0.5rem',
              fontSize: '0.875rem',
              color: '#64748B'
            }}>
              <input
                type="radio"
                checked={amount === 'custom'}
                onChange={() => setAmount('custom')}
                style={{ cursor: 'pointer' }}
              />
              Custom Amount
            </label>
            <input
              type="number"
              placeholder="Enter custom amount"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value)
                setAmount('custom')
              }}
              disabled={amount !== 'custom'}
              style={{
                width: '100%',
                padding: '0.875rem',
                border: '2px solid #E2E8F0',
                borderRadius: '4px',
                fontSize: '1rem',
                background: amount === 'custom' ? '#fff' : '#F8FAFC',
                opacity: amount === 'custom' ? 1 : 0.6
              }}
            />
          </div>
        </div>

        {/* Instructions */}
        <div style={{
          padding: '1rem',
          background: '#FEF3C7',
          borderRadius: '4px',
          marginBottom: '1.5rem',
          border: '1px solid #FCD34D'
        }}>
          <p style={{
            margin: 0,
            fontSize: '0.875rem',
            color: '#92400E',
            lineHeight: '1.5'
          }}>
            <strong>How to donate:</strong> Go to M-Pesa → Lipa na M-Pesa → Buy Goods and Services →
            Enter Till <strong>{tillNumber}</strong> → Enter the amount → Enter your PIN
          </p>
        </div>

        {/* Donate Button */}
        <button
          onClick={handleDonate}
          disabled={!amount || (amount === 'custom' && !customAmount)}
          style={{
            width: '100%',
            padding: '1rem',
            background: (!amount || (amount === 'custom' && !customAmount)) ? '#CBD5E1' : '#1B4332',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            fontSize: '1.125rem',
            fontWeight: '700',
            cursor: (!amount || (amount === 'custom' && !customAmount)) ? 'not-allowed' : 'pointer',
            transition: 'all 0.2s',
            marginBottom: '1rem'
          }}
        >
          Continue to M-Pesa
        </button>

        {/* Confirmation Message */}
        {showConfirmation && (
          <div style={{
            padding: '0.875rem',
            background: '#D1FAE5',
            border: '1px solid #34D399',
            borderRadius: '4px',
            color: '#065F46',
            fontSize: '0.875rem',
            textAlign: 'center',
            fontWeight: '500'
          }}>
            ✓ Thank you! Please complete the payment on your M-Pesa app.
          </div>
        )}
      </div>
    </section>
  )
}

export default DonateSection
