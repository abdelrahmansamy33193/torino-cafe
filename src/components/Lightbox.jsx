// src/components/Lightbox.jsx
import React from "react";

export default function Lightbox({ images = [], startIndex = 0, onClose }) {
  const [index, setIndex] = React.useState(startIndex);
  const hasMany = images.length > 1;

  // منع سكرول الخلفية + مفاتيح الكيبورد (Esc/←/→)
  React.useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
      if (e.key === "ArrowRight" && hasMany) setIndex((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft" && hasMany) setIndex((i) => (i - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [images.length, hasMany, onClose]);

  // سوايب للموبايل
  const touch = React.useRef({ x: 0 });
  const onTouchStart = (e) => (touch.current.x = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - touch.current.x;
    if (!hasMany) return;
    if (dx < -50) setIndex((i) => (i + 1) % images.length);
    if (dx > 50) setIndex((i) => (i - 1 + images.length) % images.length);
  };

  const img = images[index];

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      onClick={() => onClose?.()}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* زر الإغلاق */}
      <button
        className="lb-btn lb-close"
        aria-label="Close"
        onClick={(e) => { e.stopPropagation(); onClose?.(); }}
      >
        ×
      </button>

      {/* السابق / التالي */}
      {hasMany && (
        <>
          <button
            className="lb-btn lb-prev"
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation();
              setIndex((i) => (i - 1 + images.length) % images.length);
            }}
          >
            ‹
          </button>
          <button
            className="lb-btn lb-next"
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation();
              setIndex((i) => (i + 1) % images.length);
            }}
          >
            ›
          </button>
        </>
      )}

      {/* الصورة */}
      <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
        <img
          className="lightbox__img"
          src={img?.src}
          alt={img?.alt || ""}
          loading="eager"
          decoding="sync"
        />
        {img?.alt ? <figcaption className="lightbox__cap">{img.alt}</figcaption> : null}
      </figure>
    </div>
  );
}
