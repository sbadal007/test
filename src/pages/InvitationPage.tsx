import "./InvitationPage.css";
import { HeartsRain } from "../components/HeartsRain";

const milestones = [
  { date: "2018", text: "RN", img: "/story1.jpg" },
  { date: "2020", text: "Bachelor of Science in Nursing (BSN) & Bachelor of computer Science (BCS) ", img: "/story2.jpg" },
  { date: "2025", text: "MSN & MSIT - two degrees, one dream!", img: "/story3.jpg" },
];

const galleryImages = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery3.jpg",
];

export default function InvitationPage() {
  return (
    <div className="invitation-page">
      <section className="welcome-message rose-bordered">
        <h2>Welcome to Our Wedding Invitation</h2>
        <p>We can’t wait to celebrate with you!</p>         
        {<HeartsRain />}  
      </section>

      <section className="itinerary rose-bordered">
        <h3>Wedding Itinerary</h3>
        <ul>
          <li> Engagement Ceremony, September 22nd 2025</li>
          <li> Wedding Ceremony, September 24th 2025</li>
          <li> Reception & Dinner, September 25th 2025</li>
        </ul>        
        {<HeartsRain />}  
      </section>

      <section className="our-story rose-bordered">
        <h3>Our Story</h3>
        <div className="milestones">
          {milestones.map(({ date, text, img }) => (
            <div key={date} className="milestone">
              <img src={img} alt={text} />
              <p><strong>{date}</strong>: {text}</p>
            </div>
          ))}
        </div>
        {<HeartsRain />}  
      </section>

      <section className="photo-gallery rose-bordered">
        <h3>Photo Gallery</h3>
        <div className="gallery-grid">
          {galleryImages.map((src, i) => (
            <img key={i} src={src} alt={`Gallery image ${i + 1}`} />
          ))}
        </div>
        {<HeartsRain />}
      </section>
    </div>
  );
}
