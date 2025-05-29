import { useState, useEffect, useRef } from "react";
import SplashScreen from "./pages/SplashScreen";
import EnvelopePage from "./pages/EnvelopePage";
import InvitationPage from "./pages/InvitationPage";

export default function App() {
  const [stage, setStage] = useState<"splash" | "envelope" | "invitation">("splash");
  const [playMusic, setPlayMusic] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleEnvelopeOpen = () => {
    setPlayMusic(true); // Start background music
    setStage("invitation"); // Move to invitation page
  };

  useEffect(() => {
    if (playMusic && audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    }
  }, [playMusic]);

  return (
    <>
      {stage === "splash" && <SplashScreen onFinish={() => setStage("envelope")} />}
      {stage === "envelope" && <EnvelopePage onOpen={handleEnvelopeOpen} />}
      {stage === "invitation" && <InvitationPage />}

      {/* Background music */}
      <audio ref={audioRef} src="/background-music.mp4" loop />
    </>
  );
}
