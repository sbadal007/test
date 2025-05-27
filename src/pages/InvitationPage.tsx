import "./InvitationPage.css";
import { PetalRain } from "../components/PetalRain";

export function InvitationPage() {
  return (
    <div className="invite-container">
      <PetalRain />
      <audio autoPlay loop>
        <source src="https://www.bensound.com/bensound-music/bensound-romantic.mp3" type="audio/mp3" />
      </audio>
      <img
        src="https://i.ibb.co/p1YykWc/animated-couple.gif"
        alt="Couple"
        className="animated-couple"
      />
      <div className="message">
        <h1>You Are Cordially Invited</h1>
        <p>Two hearts. One promise. A lifetime of love.</p>
        <p>Join us as we say “I do” and begin our forever together.</p>
        <p>With love,<br /><strong>Sita ❤️ Ram</strong></p>
        <p>Date: 21st July 2025<br />Location: Pokhara, Nepal</p>
      </div>
    </div>
  );
}
