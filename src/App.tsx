import { useState } from "react";
import SplashScreen from "./pages/SplashScreen";
import EnvelopePage from "./pages/EnvelopePage";
import InvitationPage from "./pages/InvitationPage";
import YoutubeAudioPlayer from "./components/YoutubeAudioPlayer";

export default function App() {
  const [stage, setStage] = useState<"splash" | "envelope" | "invitation">("splash");
  const [playMusic, setPlayMusic] = useState(false);

  const handleEnvelopeOpen = () => {
    setPlayMusic(true); // Start background music
    setStage("invitation"); // Move to invitation page
  };

  return (
    <>
      {stage === "splash" && <SplashScreen onFinish={() => setStage("envelope")} />}
      {stage === "envelope" && <EnvelopePage onOpen={handleEnvelopeOpen} />}
      {stage === "invitation" && <InvitationPage />}

      {/* Play YouTube audio in background */}
      {playMusic && <YoutubeAudioPlayer videoId="aMIuW7hXVNU" play={true} />}
    </>
  );
}
