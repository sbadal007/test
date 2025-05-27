import "./InvitationPage.css";
import { PetalRain } from "../components/PetalRain";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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

      <motion.div
        className="envelope-wrapper"
        initial={{ rotateX: 90 }}
        animate={{ rotateX: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img
          src="https://i.ibb.co/p1YykWc/animated-couple.gif"
          alt="Couple"
          className="animated-couple"
        />
      </motion.div>

      <div className="message">
        <h1 className="title">You're Invited!</h1>
        <p className="subtitle">Two hearts. One promise. A lifetime of love.</p>
        <p className="details">Join us as we begin our forever together.</p>
        <p className="names">With love, <span>Sita ❤️ Ram</span></p>
        <p className="event-info">Date: 25th September 2025<br />Location: Pokhara, Nepal</p>

        <div className="countdown">
          <h2>Countdown to the Big Day</h2>
          <p>{timeLeft.days} days {timeLeft.hours} hrs {timeLeft.minutes} min</p>
        </div>

        <form
          action="https://formspree.io/f/xnndepon"
          method="POST"
          className="rsvp-form"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="number" name="guests" placeholder="Number of Guests" required />
          <textarea name="message" placeholder="Message (optional)"></textarea>
          <button type="submit">Send RSVP</button>
        </form>
      </div>
    </div>
  );
}
