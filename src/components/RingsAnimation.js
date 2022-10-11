import React, { useState, useEffect, useRef } from "react";
import RINGS from "vanta/dist/vanta.rings.min";
import * as THREE from "three";
import logo from '../logo.png';

export const RingsAnimation = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        RINGS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 180.0,
          minWidth: 180.0,
          scale: 1.0,
          scaleMobile: 1.0
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div className="vantajs" ref={vantaRef}>
          <p style={{ color: "#fff" }}>
          Schizophrenia Stalking
          </p>
          <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
};
 
