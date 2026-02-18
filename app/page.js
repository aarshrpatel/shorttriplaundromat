const sections = [
  { id: 'services', label: 'Services' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'hours', label: 'Hours' },
  { id: 'location', label: 'Location' },
  { id: 'contact', label: 'Contact' }
];

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Laundromat',
  name: 'Short Trip Laundromat',
  description:
    'Fast, clean laundry services including self-service wash, wash-and-fold, and commercial plans.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Main Street',
    addressLocality: 'Hometown',
    addressRegion: 'ST',
    postalCode: '10001',
    addressCountry: 'US'
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      opens: '06:00',
      closes: '22:00'
    }
  ],
  telephone: '+1-555-123-4567',
  url: 'https://shorttriplaundromat.com'
};

export default function Home() {
  return (
    <>
      <header className="siteHeader">
        <div className="container brandRow">
          <a className="brand" href="#home" aria-label="Short Trip Laundromat home">
            Short Trip Laundromat
          </a>
          <nav className="siteNav" aria-label="Primary">
            {sections.map((section) => (
              <a key={section.id} href={`#${section.id}`}>
                {section.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="home" className="container">
        <section className="hero">
          <p className="eyebrow">Fresh laundry in a short trip</p>
          <h1>Fast, clean, neighborhood laundry care.</h1>
          <p className="lead">
            Built for busy days. Drop off, wash, dry, and fold with simple pricing and friendly service.
          </p>
          <div className="heroActions">
            <a className="button" href="#contact">
              Schedule a Drop-Off
            </a>
            <a className="button buttonGhost" href="#pricing">
              View Pricing
            </a>
          </div>
        </section>

        <section id="services" className="section">
          <h2>Services</h2>
          <div className="cardGrid">
            <article className="card">
              <h3>Self-Service Wash</h3>
              <p>High-capacity machines ready all day for fast loads and faster turnaround.</p>
            </article>
            <article className="card">
              <h3>Wash &amp; Fold</h3>
              <p>Drop it off and pick it up fresh, folded, and ready to put away.</p>
            </article>
            <article className="card">
              <h3>Commercial Laundry</h3>
              <p>Flexible plans for salons, gyms, and small businesses with weekly volume.</p>
            </article>
          </div>
        </section>

        <section id="pricing" className="section sectionAlt">
          <h2>Pricing Snapshot</h2>
          <ul className="pricingList">
            <li>
              <span>Wash &amp; Fold</span>
              <strong>$1.75/lb</strong>
            </li>
            <li>
              <span>Comforters</span>
              <strong>From $12</strong>
            </li>
            <li>
              <span>Express Same-Day</span>
              <strong>+$8/order</strong>
            </li>
          </ul>
        </section>

        <section id="hours" className="section">
          <h2>Hours</h2>
          <p>Open daily 6:00 AM – 10:00 PM</p>
          <p>Last wash at 9:00 PM</p>
        </section>

        <section id="location" className="section sectionAlt">
          <h2>Location</h2>
          <address>
            123 Main Street
            <br />
            Hometown, ST 10001
          </address>
          <p>Easy parking and quick in-and-out access.</p>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <form className="contactForm" action="#" method="post">
            <label>
              Name
              <input type="text" name="name" placeholder="Your name" required />
            </label>
            <label>
              Phone
              <input type="tel" name="phone" placeholder="(555) 123-4567" required />
            </label>
            <label>
              Message
              <textarea name="message" rows="4" placeholder="How can we help?" />
            </label>
            <button type="submit" className="button">
              Send Request
            </button>
          </form>
        </section>
      </main>

      <footer className="siteFooter">
        <div className="container">
          <p>© {new Date().getFullYear()} Short Trip Laundromat. All rights reserved.</p>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
    </>
  );
}
