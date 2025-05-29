import { motion } from "framer-motion";
import "./InvitationPage.css";
import { HeartsRain } from "../components/HeartsRain";
import ItineraryFlight from "../components/ItineraryFlight";

const milestones = [
  { date: "2018", text: "RN", img: "/story1.jpg" },
  { date: "2020",  text: (
      <>
        Bachelor of Computer Science (BCS) ! I did it.        
        <br /> <br />
        Bachelor of Science in Nursing (BSN) ! She followed me.
      </>
    ), img: "/story2.jpg" },
  { date: "2025", text: (
      <>
        MSIT ! I did it again.        
        <br /> <br />
        MSN ! and She followed me again.
        <br /> <br />
        <strong> It's just two degrees, one dream! </strong>
      </>
    ), img: "/story3.jpg" },
];

const galleryImages = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery3.jpg",
];

export default function InvitationPage() {
  return (
    <div className="invitation-page">

      {/* 🎉 Welcome Message with Animation */}
      <section className="welcome-message rose-bordered">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          🥳 We Swiped Right... Now We're Saying "I Do!"
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
           Welcome to the digital front row of our love story! 🎉 From "Hello" to "I do," 
            we’ve giggled, Googled, and grown together and now we want YOU to be a part 
            of our next chapter. Like stars destined to align, our paths crossed in the most unexpected way
            and now we’re walking hand-in-hand into our happily ever after. We're getting hitched, and you're officially invited 
            to eat cake, shed a happy tear, and dance like no one’s watching! <h1>🕺💃</h1>
        </motion.p>

        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, -20, 20, -20, 20, 0] }}
          transition={{ delay: 1.2, duration: 2 }}
          className="emoji-wave"
        >
          🙏🙏🙏🙏🙏🙏🙏🙏🙏🙏🙏🙏
        </motion.div>

        <HeartsRain />
      </section>

      {/* 📅 Wedding Itinerary with Flight */}
      <section className="itinerary rose-bordered">
        <h3>SUDAN    Weds    SUSMA </h3>
        <ul>
          <li>Engagement Ceremony – September 22nd, 2025</li>
          <li>Wedding Ceremony – September 25th, 2025</li>
          <li>Reception & Dinner – September 26th, 2025</li>
        </ul>
        <ItineraryFlight />
      </section>

      {/* ❤️ Our Story Timeline */}
      <section className="our-story rose-bordered">
        <h3>Our Story</h3>
        <div className="milestones">
          {milestones.map(({ date, text, img }) => (
            <div key={date} className="milestone">
            <img src={img} alt={date} />
            <p><strong>{date}: {text} </strong></p>
          </div>
      ))}
        </div>
        <HeartsRain />
      </section>

      {/* 📸 Photo Gallery */}
      <section className="photo-gallery rose-bordered">
        <h3>Photo Gallery</h3>
        <div className="gallery-grid">
          {galleryImages.map((src, i) => (
            <img key={i} src={src} alt={`Gallery image ${i + 1}`} />
          ))}
        </div>
        <HeartsRain />
      </section>
    </div>
  );
}
