import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { EnvelopePage } from "./pages/EnvelopePage";
import { InvitationPage } from "./pages/InvitationPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EnvelopePage />} />
        <Route path="/invite" element={<InvitationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
