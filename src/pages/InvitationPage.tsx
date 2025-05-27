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
    <motion.div
      className="invite-container"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <PetalRain />
      <audio autoPlay loop>
        <source src="https://www.bensound.com/bensound-music/bensound-romantic.mp3" type="audio/mp3" />
      </audio>

      <motion.div
        className="envelope"
        initial={{ rotateX: 90 }}
        animate={{ rotateX: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <img
          src="https://i.ibb.co/p1YykWc/animated-couple.gif"
          alt="Couple"
          className="animated-couple"
        />
      </motion.div>

      <motion.div
        className="message"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <h1>You Are Cordially Invited</h1>
        <p>Two hearts. One promise. A lifetime of love.</p>
        <p>Join us as we say "I do" and begin our forever together.</p>
        <p>With love, Sita ❤️ Ram</p>
        <p>Date: 25th September 2025<br />Location: Pokhara, Nepal</p>

        <motion.div
          className="countdown"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <h2>Countdown to the Big Day</h2>
          <p>{timeLeft.days} days {timeLeft.hours} hrs {timeLeft.minutes} min</p>
        </motion.div>

        <h3>Kindly RSVP below</h3>

        <motion.form
          action="https://formspree.io/f/xnndepon"
          method="POST"
          className="rsvp-form"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <input className="rsvp-input" type="text" name="name" placeholder="Your Name" required />
          <input className="rsvp-input" type="number" name="guests" placeholder="Number of Guests" required />
          <textarea className="rsvp-textarea" name="message" placeholder="Message (optional)"></textarea>
          <button className="rsvp-button" type="submit">Submit</button>
        </motion.form>
      </motion.div>
    </motion.div>
  );
}
