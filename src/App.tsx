import { useState } from "react";
import { EnvelopePage } from "./pages/EnvelopePage";
import { InvitationPage } from "./pages/InvitationPage";

// Define the Language type here or import it if it's in another file
type Language = "en" | "np";

function App() {
  const [opened, setOpened] = useState(false);

  // ✅ Fix: Explicitly type language state with Language type
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "np" : "en"));
  };

  return (
    <>
      {opened ? (
        <InvitationPage language={language} toggleLanguage={toggleLanguage} />
      ) : (
        <EnvelopePage onOpen={() => setOpened(true)} />
      )}
    </>
  );
}

export default App;
