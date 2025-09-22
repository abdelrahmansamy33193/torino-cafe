// src/pages/Menu.jsx
import React from "react";

export default function Menu() {
  return (
    <section className="section">
      <div className="container">
        <h2 style={{ marginBottom: 8 }}>القائمة</h2>
        <p className="muted" style={{ marginBottom: 16 }}>
          اضغط على أي صورة لعرضها بالحجم الكامل.
        </p>

        <div className="menu-gallery" data-reveal>
          <a href="/menu/menu1.jpg" target="_blank" rel="noreferrer">
            <img
              src="/menu/menu1.jpg"
              alt="قائمة تورينو - الصفحة 1"
              loading="lazy"
            />
          </a>

          <a href="/menu/menu2.jpg" target="_blank" rel="noreferrer">
            <img
              src="/menu/menu2.jpg"
              alt="قائمة تورينو - الصفحة 2"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
