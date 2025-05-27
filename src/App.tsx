import EnvelopePage from "./pages/EnvelopePage";
import { InvitationPage } from "./pages/InvitationPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EnvelopePage />} />
        <Route path="/invite" element={<InvitationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
