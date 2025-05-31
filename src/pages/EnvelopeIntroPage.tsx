import { useEffect, useState, RefObject } from "react";
import { HeartsRain } from "../components/HeartsRain";
import "./EnvelopeIntroPage.css";

export default function EnvelopeIntroPage({
  onOpen,
  audioRef,
}: {
  onOpen: () => void;
  audioRef: RefObject<HTMLAudioElement>;
}) {
  const [isTilted, setIsTilted] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [hasTapped, setHasTapped] = useState(false);

  useEffect(() => {
    const handleOrientation = (event: DeviceOrientationEvent) => {
      if (event.gamma && Math.abs(event.gamma) > 10) {
        setIsTilted(true);
      }
    };

    const enableOrientation = async () => {
      if (
        typeof DeviceOrientationEvent !== "undefined" &&
        typeof (DeviceOrientationEvent as any).requestPermission === "function"
      ) {
        try {
          const response = await (DeviceOrientationEvent as any).requestPermission();
          if (response === "granted") {
            window.addEventListener("deviceorientation", handleOrientation);
          }
        } catch (err) {
          console.warn("Device orientation permission denied:", err);
        }
      } else {
        window.addEventListener("deviceorientation", handleOrientation);
      }
    };

    enableOrientation();
    return () => {
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }, []);

  const handleTap = () => {
    if (isTilted && !isOpen) {
      setHasTapped(true);
      setIsOpen(true);
      audioRef.current?.play().catch(() => {});
      setTimeout(onOpen, 8500);
    }
  };

  return (
    <div className="envelope-wrapper" onClick={handleTap}>
      {!hasTapped ? (
        <div className="tap-container">
          <div className="tap-message">📱 Tap to open</div>
          <img src="/Ganesh.jpg" alt="Ganesh" className="ganesh-image" />
        </div>
      ) : (
        <div className={`envelope ${isOpen ? "opened" : ""}`}>
          <div className="envelope-content">
            <img
              src="/Red-envelop.jpg"
              alt="Envelope"
              className="envelope-image"
            />
            <div className="invite-text">
              <br />
              <br />
             You are invited to
              <br />
              SUDAN and SUSMA
              <br />
              wedding celebration!
            </div>
          </div>
          {isOpen && <HeartsRain />}
        </div>
      )}
    </div>
  );
}
