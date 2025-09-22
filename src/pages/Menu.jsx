// src/pages/Menu.jsx
import React from "react";
import Lightbox from "../components/Lightbox";

const IMAGES = [
  { src: "/menu/menu1.jpg", alt: "قائمة تورينو - الصفحة 1" },
  { src: "/menu/menu2.jpg", alt: "قائمة تورينو - الصفحة 2" },
];

export default function Menu() {
  const [open, setOpen] = React.useState(false);
  const [startIndex, setStartIndex] = React.useState(0);

  const openAt = (i) => {
    setStartIndex(i);
    setOpen(true);
  };

  return (
    <section className="section">
      <div className="container">
        <h2 style={{ marginBottom: 8 }}>القائمة</h2>
        <p className="muted" style={{ marginBottom: 16 }}>
          اضغط على أي صفحة لعرضها بالحجم الكامل.
        </p>

        <div className="menu-gallery" data-reveal>
          {IMAGES.map((img, i) => (
            <button
              key={img.src}
              className="menu-thumb"
              onClick={() => openAt(i)}
              aria-label={`Open ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                decoding="async"
              />
            </button>
          ))}
        </div>
      </div>

      {open && (
        <Lightbox
          images={IMAGES}
          startIndex={startIndex}
          onClose={() => setOpen(false)}
        />
      )}
    </section>
  );
}
