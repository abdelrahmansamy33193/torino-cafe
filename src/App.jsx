// src/App.jsx
import React from "react";
import "./styles.css";

const MENU = [
  { id: 1, name: "Espresso", price: "45 EGP", desc: "قهوة مركّزة بطعم غني." },
  { id: 2, name: "Cappuccino", price: "65 EGP", desc: "شوت إسبريسو + حليب رغوي." },
  { id: 3, name: "Latte", price: "60 EGP", desc: "حليب ناعم مع إسبريسو." },
  { id: 4, name: "Mocha", price: "70 EGP", desc: "شوكولاتة + إسبريسو + حليب." },
  { id: 5, name: "Iced Coffee", price: "55 EGP", desc: "قهوة مثلّجة منعشة." },
  { id: 6, name: "Croissant", price: "40 EGP", desc: "مخبوز يوميًا بالزبدة." }
];

export default function App() {
  return (
    <>
      <header className="navbar">
        <div className="container nav-inner">
          <div className="logo">Torino Café</div>
          <nav className="nav">
            <a href="#menu">Menu</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <h1>أهلاً بيك في Torino Café ☕</h1>
            <p>قهوة مظبوطة، مكونات طازة، ومكان مريح.</p>
            <a className="btn" href="#menu">شوف المنيو</a>
          </div>
        </section>

        <section id="menu" className="section">
          <div className="container">
            <h2>القائمة</h2>
            <div className="grid">
              {MENU.map(item => (
                <article key={item.id} className="card">
                  {/* لو عندك صور: <img src={`/images/${item.image}`} alt={item.name} className="card-img" /> */}
                  <div className="card-body">
                    <div className="row">
                      <h3>{item.name}</h3>
                      <span className="price">{item.price}</span>
                    </div>
                    <p className="muted">{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <h2>عنّا</h2>
            <p>
              بنختار البنّ بعناية و بنحمّصه بنَفْسنا. هدفنا تجربة قهوة ثابتة ولذيذة كل مرة.
            </p>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <h2>تواصل</h2>
            <ul className="contact">
              <li>📍 العنوان: اكتب عنوان الكافيه هنا</li>
              <li>📞 التليفون: 01xxxxxxxxx</li>
              <li>🕒 المواعيد: يوميًا 8:00 ص – 11:00 م</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">© {new Date().getFullYear()} Torino Café</div>
      </footer>
    </>
  );
}
