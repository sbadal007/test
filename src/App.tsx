import { useState } from "react";
import { InvitationPage } from "./pages/InvitationPage";

type Language = "en" | "np";

function App() {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "np" : "en"));
  };

  return <InvitationPage language={language} toggleLanguage={toggleLanguage} />;
}

export default App;
