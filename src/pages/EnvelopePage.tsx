import { useState, useEffect } from "react";
import "./EnvelopePage.css";

export function EnvelopePage({ onOpen }: { onOpen: () => void }) {
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    if (isOpening) {
      const timeout = setTimeout(() => {
        onOpen(); // trigger page change after animation
      }, 2000); // match the animation duration
      return () => clearTimeout(timeout);
    }
  }, [isOpening, onOpen]);

  return (
    <div className="envelope-container" onClick={() => setIsOpening(true)}>
      <div className={`envelope ${isOpening ? "open" : ""}`}>
        <div className="flap"></div>
        <div className="letter">
          <p>You're Invited!</p>
          <p>Click to Open</p>
        </div>
        <div className="front"></div>
      </div>
    </div>
  );
}
