import { useState } from "react";
import SplashScreen from "./pages/SplashScreen";
import EnvelopeIntroPage from "./pages/EnvelopeIntroPage";
import InvitationPage from "./pages/InvitationPage";

export default function App() {
  const [stage, setStage] = useState<"intro" | "splash" | "invitation">("intro");

  return (
    <>
      {stage === "intro" && <EnvelopeIntroPage onOpen={() => setStage("splash")} />}
      {stage === "splash" && <SplashScreen onFinish={() => setStage("invitation")} />}
      {stage === "invitation" && <InvitationPage />}
    </>
  );
}
