import { useEffect, useState } from "react";
import { HeartsRain } from "../components/HeartsRain";
import "./EnvelopeIntroPage.css";

export default function EnvelopeIntroPage({ onOpen }: { onOpen: () => void }) {
  const [isTilted, setIsTilted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOrientation = (event: DeviceOrientationEvent) => {
      if (event.gamma && Math.abs(event.gamma) > 25) {
        setIsTilted(true);
      }
    };
    window.addEventListener("deviceorientation", handleOrientation);
    return () => window.removeEventListener("deviceorientation", handleOrientation);
  }, []);

  const handleTap = () => {
    if (isTilted && !isOpen) {
      setIsOpen(true);
      setTimeout(onOpen, 3500); // wait 10 seconds before moving to next screen
    }
  };

  return (
    <div className="envelope-wrapper" onClick={handleTap}>
      <div className={`envelope ${isOpen ? "opened" : ""}`}>
        <div className="flap" />
        <div className="message-inside">
          {!isOpen && (
            <div className="center-message">
              📱 Tilt your phone & tap to open this message
            </div>
          )}
          {isOpen && (
            <div className="invitation-message">
              💌 You are invited to SUDAN and SUSMA wedding!
            </div>
          )}
        </div>
        {isOpen && <HeartsRain />}
      </div>
    </div>
  );
}
