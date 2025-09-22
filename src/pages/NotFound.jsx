import React from "react";
export default function NotFound() {
  return (
    <section className="section">
      <div className="container">
        <h2>404 — الصفحة غير موجودة</h2>
        <p className="muted">المسار الذي تحاول الوصول إليه غير صحيح.</p>
        <a className="btn" href="/">العودة للرئيسية</a>
      </div>
    </section>
  );
}
