const DonateSection = ({ onDonateClick, tillNumber }) => {
  return (
    <section className="section donate" id="donate">
      <div className="donate-left">
        <p className="eyebrow">Donate</p>
        <h2>Trustworthy, M-Pesa-first donations.</h2>
        <p>
          Your contribution powers youth-led initiatives, emergency drives, and learning programs. We keep the flow
          simple: choose an amount, use the official Till Number, and get a clear confirmation.
        </p>
        <div className="steps">
          <div className="step">
            <span className="step-number">1</span>
            <div>
              <h4>Initiate</h4>
              <p>Tap Donate to open the M-Pesa details. No card inputs or sensitive data collected here.</p>
            </div>
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <div>
              <h4>Send securely</h4>
              <p>Use your M-Pesa app or SIM toolkit to send to Till {tillNumber}. Enter your PIN on your device.</p>
            </div>
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <div>
              <h4>Confirm</h4>
              <p>Return here to see your confirmation and learn how your gift supports specific causes.</p>
            </div>
          </div>
        </div>
        <div className="cta-row">
          <button className="primary-button" type="button" onClick={onDonateClick}>
            Open M-Pesa Details
          </button>
          <p className="subtle">Official Till Number: {tillNumber}</p>
        </div>
      </div>
      <div className="donate-card">
        <h4>M-Pesa Quick Info</h4>
        <ul>
          <li>Payment type: Buy Goods & Services</li>
          <li>Till Number: {tillNumber}</li>
          <li>No passwords or card numbers requested here.</li>
          <li>We log amount, reference, and cause tag only.</li>
        </ul>
        <div className="alert">
          <strong>Security note:</strong> You will enter your M-Pesa PIN only inside your trusted M-Pesa flow.
        </div>
      </div>
    </section>
  )
}

export default DonateSection
