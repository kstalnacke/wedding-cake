import React, { useState } from 'react'

function WelcomeSection() {
  return (
    <section className="welcome-message">
      <img src="/star.svg" alt="Decorative image" className="image" />
      <h1>Bästa bröllopsgäst,</h1>

      <p>
        Här kommer ni att hitta all information om vårt bröllop. Titta gärna in igen den 1 augusti 2026, då är allt på plats! 
      </p>

      <p>
        Vi ser så fram emot att fira denna dag med er.
      </p>

      <p style={{ marginTop: '2rem' }}>
        Varma hälsningar,
        <br />
        Kaleb och Maja
      </p>

    </section>
  )
}

function PasswordSection() {
  return (
    <section className="password-section">
      <img src="https://pub-c01c33c2fc314207be617e87ea3e1b0b.r2.dev/star.svg" alt="Decorative image" className="image" />
      <h2>Lösenord</h2>
      <p style={{ marginTop: '0.6rem' }}>
        Ni kommer att behöva ett lösenord för att logga in här efter den 1 augusti 2026. Ange då svaret på följande fråga (bara små bokstäver). På vilken arbetsplats jobbade brudparet när de träffades?
      </p>
    </section>
  )
}

function HotelsSection() {
  return (
    <section className="hotels">
      <img src="/star.svg" alt="Decorative image" className="image" />
      <h2>Hotellbokningar</h2>
      <div id="hotel-info">
        <p>
          Till våra långväga gäster kan vi redan nu tipsa om att ni får <b>15% rabatt</b> på boende på <b>U&Me</b> och <b>Stora Hotellet</b>.
        </p>
        <p>
        <br></br>
          Bokning sker via mail. Ange <i>"Bröllop Kaleb och Maja + Karin"</i> i ämnesraden. Uppge vilket hotell, antal personer, rumstyp och dina kontaktuppgifter.
        </p>

        <div className="email-button-container">
          <a href="mailto:book@p5.nu" className="email-button">Maila hotellen</a>
        </div>
      </div>
    </section>
  )
}


export default function App() {
  const [tab, setTab] = useState('hem')

  return (
    <div className="frame">
      <main className="container">
        <nav className="nav" aria-label="Site navigation">
          <a href="#hem" className={`nav-link ${tab === 'hem' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setTab('hem') }}>Hem</a>
          <span className="sep" aria-hidden="true">|</span>
          <a href="#hotell" className={`nav-link ${tab === 'hotell' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setTab('hotell') }}>Hotell</a>
          <span className="sep" aria-hidden="true">|</span>
          <a href="#losen" className={`nav-link ${tab === 'losen' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setTab('losen') }}>Lösenord</a>
        </nav>

        <div className="content-area">
          {tab === 'hem' && <WelcomeSection />}
          {tab === 'hotell' && <HotelsSection />}
          {tab === 'losen' && <PasswordSection />}
        </div>
      </main>
    </div>
  )
}
