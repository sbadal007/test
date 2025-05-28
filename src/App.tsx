import { useState } from "react";
import SplashScreen from "./pages/SplashScreen";
import EnvelopePage from "./pages/EnvelopePage";
import InvitationPage from "./pages/InvitationPage";

export default function App() {
  const [stage, setStage] = useState<"splash" | "envelope" | "invitation">("splash");

  return (
    <>
      {stage === "splash" && <SplashScreen onFinish={() => setStage("envelope")} />}
      {stage === "envelope" && <EnvelopePage onOpen={() => setStage("invitation")} />}
      {stage === "invitation" && <InvitationPage />}
    </>
  );
}