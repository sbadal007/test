import { useState } from "react";
import { EnvelopePage } from "./pages/EnvelopePage";
import { InvitationPage } from "./pages/InvitationPage";

function App() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      {opened ? <InvitationPage /> : <EnvelopePage onOpen={() => setOpened(true)} />}
    </>
  );
}

export default App;
