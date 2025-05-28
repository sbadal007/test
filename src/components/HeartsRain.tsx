import React from "react";
import "./HeartsRain.css";

const NUM_HEARTS = 20;

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function HeartsRain() {
  const hearts = Array.from({ length: NUM_HEARTS });

  return (
    <div className="hearts-rain">
      {hearts.map((_, i) => {
        const style = {
          left: `${random(0, 100)}%`,
          animationDelay: `${random(0, 10)}s`,
          animationDuration: `${random(4, 8)}s`,
          fontSize: `${random(12, 24)}px`,
          opacity: random(0.5, 1),
        };
        return (
          <span key={i} className="heart" style={style}>
            ❤️
          </span>
        );
      })}
    </div>
  );
}
