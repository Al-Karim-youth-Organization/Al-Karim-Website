import { useState } from 'react'

const DonateModal = ({ open, onClose, tillNumber }) => {
  const [amount, setAmount] = useState('')
  const [phone, setPhone] = useState('') // new field for phone number
  const [preferredCause, setPreferredCause] = useState('General Fund')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(null)

  if (!open) return null

  // STK Push function
  const initiateSTKPush = async () => {
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/mpesa-stk-push`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
          },
          body: JSON.stringify({ phone, amount })
        }
      )

      const result = await response.json()
      if (response.ok) {
        setSuccess(true)
        console.log('STK Push sent:', result)
      } else {
        setError(result.error || 'Failed to initiate payment.')
      }
    } catch (err) {
      console.error(err)
      setError('Network or server error.')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    // Trigger STK Push
    await initiateSTKPush()
    // Optionally close the modal after success
    if (success) onClose({ amount, cause: preferredCause })
  }

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="donate-title">
      <div className="modal">
        <div className="modal-header">
          <div>
            <p className="eyebrow">M-Pesa</p>
            <h3 id="donate-title">Send your gift via M-Pesa</h3>
            <p className="section-description">
              Enter your phone number and amount to receive a payment prompt on your phone.
            </p>
          </div>
          <button className="icon-button" type="button" onClick={() => onClose()}>✕</button>
        </div>
        <form className="modal-body" onSubmit={handleSubmit}>
          <label className="field">
            <span>Phone Number</span>
            <input
              type="tel"
              name="phone"
              placeholder="2547XXXXXXXX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </label>
          <label className="field">
            <span>Donation amount (KES)</span>
            <input
              type="number"
              name="amount"
              min="50"
              placeholder="500"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </label>
          <label className="field">
            <span>Cause tag</span>
            <select value={preferredCause} onChange={(e) => setPreferredCause(e.target.value)}>
              <option>General Fund</option>
              <option>Iftar Campaign</option>
              <option>Education Support</option>
              <option>Emergency Relief</option>
            </select>
          </label>

          <div className="info-tile">
            <p className="eyebrow">How it works</p>
            <ol>
              <li>You will receive an M-Pesa prompt on your phone.</li>
              <li>Enter your M-Pesa PIN to complete the payment.</li>
              <li>We will log your donation automatically once confirmed.</li>
            </ol>
          </div>

          {loading && <p>Processing payment...</p>}
          {success && <p className="success">Payment prompt sent successfully!</p>}
          {error && <p className="error">{error}</p>}

          <div className="modal-actions">
            <button className="secondary-button" type="button" onClick={() => onClose()}>
              Cancel
            </button>
            <button className="primary-button" type="submit" disabled={loading}>
              {loading ? 'Processing...' : 'Send Payment'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default DonateModal
