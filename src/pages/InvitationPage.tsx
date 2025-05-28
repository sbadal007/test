import "./InvitationPage.css";
import { PetalRain } from "../components/PetalRain";
import { useEffect, useState } from "react";

export function InvitationPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date("2025-09-25T00:00:00");

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / 1000 / 60) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="invite-container">
      <PetalRain />
      <audio autoPlay loop>
        <source src="https://www.bensound.com/bensound-music/bensound-romantic.mp3" type="audio/mp3" />
      </audio>
      <img
        src="/IMG_4745.jpg"
        alt="Couple"
        className="animated-couple glowing"
      />
      <div className="message">
        <h1 className="fade-in">You Are Cordially Invited</h1>
        <p className="slide-in">Two hearts. One promise. A lifetime of love.</p>
        <p className="slide-in">Join us as we say "I do" and begin our forever together.</p>
        <p className="slide-in">With love, SUSMA ❤️ SUDAN </p>
        <p className="slide-in">Date: 25th September 2025<br />Location: Pokhara, Nepal</p>
        <h2 className="countdown">Countdown to the Big Day</h2>
        <p className="timer">
          {timeLeft.days} days {timeLeft.hours} hrs {timeLeft.minutes} min {timeLeft.seconds} sec
        </p>
        <h3 className="rsvp-header">Kindly RSVP below</h3>
        <form
          action="https://formspree.io/f/xnndepon"
          method="POST"
          className="rsvp-form decorated-form"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="number" name="guests" placeholder="Number of Guests" required />
          <textarea name="message" placeholder="Message (optional)"></textarea>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
}
