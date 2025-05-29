import { useEffect, useRef, useState } from "react";
import { HeartsRain } from "../components/HeartsRain";
import "./EnvelopeIntroPage.css";

export default function EnvelopeIntroPage({ onOpen }: { onOpen: () => void }) {
  const [isTilted, setIsTilted] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

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
      audioRef.current?.play().catch((err) => {
        console.log("Autoplay failed:", err);
      });
      setTimeout(onOpen, 10000);
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
              💌 You are invited to our wedding!
            </div>
          )}
        </div>
        {isOpen && <HeartsRain />}
      </div>
      {/* Hidden audio player */}
      <audio ref={audioRef} src="/background-music.mp4" loop />
    </div>
  );
}
