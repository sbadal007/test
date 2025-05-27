import { useEffect } from "react";
import "./PetalRain.css";

export function PetalRain() {
  useEffect(() => {
    const container = document.createElement("div");
    container.className = "petal-container";
    document.body.appendChild(container);

    const interval = setInterval(() => {
      const petal = document.createElement("div");
      petal.className = "petal";
      petal.style.left = `${Math.random() * 100}%`;
      container.appendChild(petal);

      setTimeout(() => petal.remove(), 10000);
    }, 300);

    return () => {
      clearInterval(interval);
      container.remove();
    };
  }, []);

  return null;
}
