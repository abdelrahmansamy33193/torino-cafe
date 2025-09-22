import { useEffect } from 'react';

const menuItems = [
  { title: 'Espresso', desc: 'Rich and bold Italian espresso.' },
  { title: 'Cappuccino', desc: 'Silky foam with a strong espresso base.' },
  { title: 'Latte', desc: 'Smooth espresso with steamed milk.' },
  { title: 'Tiramisu', desc: 'Classic Italian dessert with coffee notes.' },
];

const games = [
  {
    title: 'Mario Kart Night',
    desc: 'Race with friends and enjoy a competitive evening.',
    img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'FIFA Showdown',
    desc: 'Challenge your buddies to a football match.',
    img: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Arcade Classics',
    desc: 'Relive the golden age of arcade games.',
    img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop'
  },
];

function Header() {
  return (
    <header>
      <div className="logo">Torino Café</div>
      <nav>
        <ul>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#booking">Booking</a></li>
          <li><a href="#gaming">Gaming</a></li>
        </ul>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <h1>Welcome to Torino Café</h1>
      <p>Great coffee, cozy vibes, and a dash of play.</p>
      <a className="btn" href="#menu">Explore Menu</a>
    </section>
  );
}

function Menu() {
  return (
    <section id="menu">
      <h2>Our Menu</h2>
      <div className="menu-grid">
        {menuItems.map((item) => (
          <div className="menu-item" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Booking() {
  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get('name');
    const phone = data.get('phone');
    const date = data.get('date');
    const time = data.get('time');
    const people = data.get('people');
    alert(`Thanks, ${name}!\nWe received your booking for ${people} on ${date} at ${time}.`);
    e.currentTarget.reset();
  };

  return (
    <section id="booking">
      <h2>Book a Table</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" placeholder="Your name" required />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" placeholder="+966-5x-xxx-xxxx" required />
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input id="date" name="date" type="date" required />
        </div>
        <div>
          <label htmlFor="time">Time</label>
          <input id="time" name="time" type="time" required />
        </div>
        <div>
          <label htmlFor="people">People</label>
          <input id="people" name="people" type="number" min="1" max="20" defaultValue="2" required />
        </div>
        <button type="submit">Book Now</button>
      </form>
    </section>
  );
}

function Gaming() {
  return (
    <section id="gaming">
      <h2>Gaming Nights</h2>
      <div className="gaming-grid">
        {games.map((g) => (
          <div className="gaming-card" key={g.title}>
            <img src={g.img} alt={g.title} loading="lazy" />
            <h3>{g.title}</h3>
            <p>{g.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>© {new Date().getFullYear()} Torino Café — All rights reserved.</p>
    </footer>
  );
}

function BackToTop() {
  useEffect(() => {
    const btn = document.getElementById('backToTop');
    const onScroll = () => {
      if (window.scrollY > 300) {
        btn.style.display = 'block';
      } else {
        btn.style.display = 'none';
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button id="backToTop" aria-label="Back to top" title="Back to top" onClick={scrollToTop}>
      ↑
    </button>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Menu />
      <Booking />
      <Gaming />
      <Footer />
      <BackToTop />
    </>
  );
}
