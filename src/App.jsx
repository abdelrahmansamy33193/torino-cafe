import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
  useLocation
} from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { useScrollFX } from "./hooks/useScrollFX";
import BackToTop from "./components/BackToTop";

// غلاف داخل الراوتر عشان نقدر نجيب المسار
function Shell() {
  const location = useLocation();          // ← هنا بناخد الـ pathname
  useScrollFX(location.pathname);          // ← نمرره للهوك

  return (
    <>
      {/* شريط تقدّم التمرير */}
      <div className="scroll-progress" aria-hidden="true">
        <div className="scroll-progress__bar"></div>
      </div>

      <header className="navbar">
        <div className="container nav-inner">
          <div className="logo">
            <NavLink to="/" end className="logo" style={{ textDecoration: "none", color: "inherit" }}>
              Torino Café
            </NavLink>
          </div>

          <nav className="nav">
            <NavLink to="/" end className={({isActive}) => "nav-link" + (isActive ? " active" : "")}>
              Home
            </NavLink>
            <NavLink to="/menu" className={({isActive}) => "nav-link" + (isActive ? " active" : "")}>
              Menu
            </NavLink>
            <NavLink to="/about" className={({isActive}) => "nav-link" + (isActive ? " active" : "")}>
              About
            </NavLink>
            <NavLink to="/contact" className={({isActive}) => "nav-link" + (isActive ? " active" : "")}>
              Contact
            </NavLink>
          </nav>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/index.html" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="footer">
        <div className="container">© {new Date().getFullYear()} Torino Café</div>
      </footer>

      <BackToTop />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  );
}
