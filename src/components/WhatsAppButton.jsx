// src/components/WhatsAppButton.jsx
import React from "react";

export default function WhatsAppButton({ phone = "201013212720", text = "أهلاً، عايز استفسر عن المنيو 🧋" }) {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  return (
    <a className="wa-fab" href={href} target="_blank" rel="noreferrer" aria-label="WhatsApp">
      ⮕ WhatsApp
    </a>
  );
}
