import React from "react";

const MENU = [
  { id: 1, name: "Espresso",   price: "45 EGP", desc: "قهوة مركّزة بطعم غني." },
  { id: 2, name: "Cappuccino", price: "65 EGP", desc: "شوت إسبريسو + حليب رغوي." },
  { id: 3, name: "Latte",      price: "60 EGP", desc: "حليب ناعم مع إسبريسو." },
  { id: 4, name: "Mocha",      price: "70 EGP", desc: "شوكولاتة + إسبريسو + حليب." }
];

export default function Menu() {
 
  return (
    <section className="section">
      <div className="container">
        <h2 data-reveal>القائمة</h2>
        <div className="grid">
          {MENU.map((item, i) => (
            <article
              key={item.id}
              className="card"
              data-reveal
              style={{ transitionDelay: `${80 + i * 40}ms` }}
            >
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
  );
}
