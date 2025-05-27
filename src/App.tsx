import { useState } from "react";
import "./App.css";
import { EnvelopePage } from "./pages/EnvelopePage";
import { InvitationPage } from "./pages/InvitationPage";

type Language = "en" | "np";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "np" : "en"));
  };
  return (
    <div className="App">
      {isOpen ? (
        <InvitationPage language={language} toggleLanguage={toggleLanguage} />
      ) : (
        <EnvelopePage onOpen={() => setIsOpen(true)} />
      )}
    </div>
  );
}

export default App;
