import "./InvitationPage.css";

export function InvitationPage() {
  return (
    <div className="invite-container">
      <audio autoPlay loop>
        <source src="https://www.bensound.com/bensound-music/bensound-romantic.mp3" type="audio/mp3" />
      </audio>
      <img
        src="https://i.ibb.co/p1YykWc/animated-couple.gif"
        alt="Couple"
        className="animated-couple"
      />
      <div className="message">
        <h1>You’re Invited!</h1>
        <p>We found love in each other, and now we invite you to celebrate it with us.</p>
        <p>Join us as we begin our forever 💍</p>
      </div>
    </div>
  );
}
