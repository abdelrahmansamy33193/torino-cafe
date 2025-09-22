import React from "react";

export default function Home() {
  return (
    <section className="hero">{/* الخلفية من CSS باستخدام /img/home-bg.jpg */}
      <div className="container" data-reveal>
        <h1>B12 Café</h1>
        <p className="muted">
          قهوة مظبوطة، مكونات طازة، ومكان مريح — جرّب مزاج تورينو.
        </p>
      </div>
    </section>
  );
}
