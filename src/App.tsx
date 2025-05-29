import { useRef, useState } from "react";
import EnvelopeIntroPage from "./pages/EnvelopeIntroPage";
import SplashScreen from "./pages/SplashScreen";
import InvitationPage from "./pages/InvitationPage";

export default function App() {
  const [stage, setStage] = useState<"intro" | "splash" | "invitation">("intro");
  const audioRef = useRef<HTMLAudioElement>(null);

  return (
    <>
      {stage === "intro" && (
        <EnvelopeIntroPage
          onOpen={() => setStage("splash")}
          audioRef={audioRef}
        />
      )}
      {stage === "splash" && (
        <SplashScreen onFinish={() => setStage("invitation")} />
      )}
      {stage === "invitation" && <InvitationPage />}
      <audio ref={audioRef} src="/background-music.mp4" loop />
    </>
  );
}
