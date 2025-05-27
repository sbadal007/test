import "./InvitationPage.css";
import { PetalRain } from "../components/PetalRain";
import { useEffect, useState } from "react";

export function InvitationPage() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const targetDate = new Date("2025-09-25T00:00:00");
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      setTimeLeft({ days, hours, minutes });
    }, 60000);
    return () => clearInterval(interval);
  }, []);

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
        <p>Join us as we say "I do" and begin our forever together.</p>
        <p>With love, Sita ❤️ Ram</p>
        <p>Date: 25th September 2025<br />Location: Pokhara, Nepal</p>
        <h2>Countdown to the Big Day</h2>
        <p>{timeLeft.days} days {timeLeft.hours} hrs {timeLeft.minutes} min</p>
        <h3>Kindly RSVP below</h3>
        <form
          action="https://formspree.io/f/xnndepon"
          method="POST"
          className="rsvp-form"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="number" name="guests" placeholder="Number of Guests" required />
          <textarea name="message" placeholder="Message (optional)"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
