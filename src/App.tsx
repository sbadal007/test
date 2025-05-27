import { useState } from "react";
import "./App.css"; // for envelope styling

function App() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="app-container">
      {!opened ? (
        <div className="envelope-wrapper" onClick={() => setOpened(true)}>
          <div className="envelope">
            <div className="flap"></div>
            <div className="body"></div>
            <div className="letter">Tap to open</div>
          </div>
        </div>
      ) : (
        <div className="invitation">
          <h1>You're Invited!</h1>
          <p>Join us in celebrating our special day 💍</p>
          {/* Add photo, countdown, RSVP, etc. */}
        </div>
      )}
    </div>
  );
}

export default App;
