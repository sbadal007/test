import "./InvitationPage.css";
import { PetalRain } from "../components/PetalRain";
import { useEffect, useState } from "react";

export function InvitationPage({ language, toggleLanguage }) {
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

  const texts = {
    en: {
      title: "You Are Cordially Invited",
      subtitle: "Two hearts. One promise. A lifetime of love.",
      details: "Join us as we say \"I do\" and begin our forever together.",
      names: "With love, Sita ❤️ Ram",
      date: "Date: 25th September 2025",
      location: "Location: Pokhara, Nepal",
      rsvp: "Kindly RSVP below",
      name: "Your Name",
      guests: "Number of Guests",
      message: "Message (optional)",
      submit: "Submit",
      countdown: "Countdown to the Big Day",
      toggle: "नेपालीमा पढ्नुहोस्"
    },
    np: {
      title: "तपाईंलाई हार्दिक निमन्त्रणा",
      subtitle: "दुई मुटु, एक बाचा, सँगैको जीवन यात्रा।",
      details: "हामीसँगै नयाँ अध्याय सुरु गर्दैछौं – तपाईंको साथ आवश्यक छ।",
      names: "मायाका साथ, सीता ❤️ राम",
      date: "मिति: २५ सेप्टेम्बर २०२५",
      location: "स्थान: पोखरा, नेपाल",
      rsvp: "कृपया तल RSVP गर्नुहोस्",
      name: "तपाईंको नाम",
      guests: "आउने पाहुनाहरूको संख्या",
      message: "सन्देश (वैकल्पिक)",
      submit: "पठाउनुहोस्",
      countdown: "विवाह समारोहको प्रतीक्षा",
      toggle: "Read in English"
    }
  };

  const t = texts[language];

  return (
    <div className="invite-container">
      <PetalRain />
      <button className="lang-toggle" onClick={toggleLanguage}>{t.toggle}</button>
      <audio autoPlay loop>
        <source src="https://www.bensound.com/bensound-music/bensound-romantic.mp3" type="audio/mp3" />
      </audio>
      <img
        src="https://i.ibb.co/p1YykWc/animated-couple.gif"
        alt="Couple"
        className="animated-couple"
      />
      <div className="message">
        <h1>{t.title}</h1>
        <p>{t.subtitle}</p>
        <p>{t.details}</p>
        <p>{t.names}</p>
        <p>{t.date}<br />{t.location}</p>
        <h2>{t.countdown}</h2>
        <p>{timeLeft.days} days {timeLeft.hours} hrs {timeLeft.minutes} min</p>
        <h3>{t.rsvp}</h3>
        <form
          action="https://formspree.io/f/xnndepon" 
          method="POST"
          className="rsvp-form"
        >
          <input type="text" name="name" placeholder={t.name} required />
          <input type="number" name="guests" placeholder={t.guests} required />
          <textarea name="message" placeholder={t.message}></textarea>
          <button type="submit">{t.submit}</button>
        </form>
      </div>
    </div>
  );
}
