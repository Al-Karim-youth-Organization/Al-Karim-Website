import { useState } from 'react'

const DonateModal = ({ open, onClose, tillNumber }) => {
  const [amount, setAmount] = useState('')
  const [preferredCause, setPreferredCause] = useState('General Fund')

  if (!open) return null

  const handleSubmit = (event) => {
    event.preventDefault()
    onClose({ amount, cause: preferredCause })
  }

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="donate-title">
      <div className="modal">
        <div className="modal-header">
          <div>
            <p className="eyebrow">M-Pesa</p>
            <h3 id="donate-title">Send your gift via M-Pesa</h3>
            <p className="section-description">
              Use your phone to complete payment. Entering an amount here helps us tag your donation with the right
              cause once your M-Pesa confirmation arrives.
            </p>
          </div>
          <button className="icon-button" type="button" onClick={() => onClose()}>✕</button>
        </div>
        <form className="modal-body" onSubmit={handleSubmit}>
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
            <p className="eyebrow">How to pay</p>
            <ol>
              <li>Open M-Pesa &gt; Buy Goods and Services.</li>
              <li>Enter Till Number <strong>{tillNumber}</strong>.</li>
              <li>Enter your amount and confirm with your PIN.</li>
              <li>Keep your confirmation SMS; we will log your reference.</li>
            </ol>
          </div>
          <div className="modal-actions">
            <button className="secondary-button" type="button" onClick={() => onClose()}>
              Cancel
            </button>
            <button className="primary-button" type="submit">
              Mark as Sent
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default DonateModal
