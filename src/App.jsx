import React from "react";
import { Link, Routes, Route, Navigate } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <header className="navbar">
        <div className="container nav-inner">
          <div className="logo">
            <Link to="/" className="logo" style={{ textDecoration: "none", color: "inherit" }}>
              Torino Café
            </Link>
          </div>
          <nav className="nav">
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* مسارات قديمة لو كانت #anchors */}
          <Route path="/index.html" element={<Navigate to="/" replace />} />
          {/* أي مسار مش معروف */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="footer">
        <div className="container">© {new Date().getFullYear()} Torino Café</div>
      </footer>
    </>
  );
}
