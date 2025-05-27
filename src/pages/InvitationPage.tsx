import "./InvitationPage.css";
import { PetalRain } from "../components/PetalRain";
import { useEffect, useState } from "react";

type Language = "en" | "np";

interface Props {
  language: Language;
  toggleLanguage: () => void;
}

export function InvitationPage({ language, toggleLanguage }: Props) {
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

  const texts: Record<Language, { [key: string]: string }> = {
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
