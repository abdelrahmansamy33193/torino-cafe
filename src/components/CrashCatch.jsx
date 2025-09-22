// src/components/CrashCatch.jsx
import React from "react";

export default class CrashCatch extends React.Component {
  constructor(p){ super(p); this.state = { err: null, info: null }; }
  static getDerivedStateFromError(err){ return { err }; }
  componentDidCatch(err, info){ console.error("💥 UI Crash:", err, info); this.setState({ info }); }
  render(){
    if (this.state.err) {
      return (
        <div style={{padding:"24px", color:"#fff", fontFamily:"monospace", whiteSpace:"pre-wrap"}}>
          <h2>💥 حصل خطأ في الواجهة</h2>
          <div style={{background:"#1f2937", padding:"12px", borderRadius:8, border:"1px solid #374151"}}>
            {String(this.state.err && this.state.err.message || this.state.err)}
          </div>
          <p className="muted">شوف كمان Console (F12) لو محتاج تفاصيل.</p>
        </div>
      );
    }
    return this.props.children;
  }
}
