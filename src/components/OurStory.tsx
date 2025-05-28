const milestones = [
  { date: "2018", text: "First met at university", img: "/story1.jpg" },
  { date: "2019", text: "First trip together", img: "/story2.jpg" },
  { date: "2021", text: "Got engaged", img: "/story3.jpg" },
];

export default function OurStory() {
  return (
    <section className="our-story">
      <h2>Our Story</h2>
      <div className="milestones">
        {milestones.map(({ date, text, img }) => (
          <div key={date} className="milestone">
            <img src={img} alt={text} />
            <p><strong>{date}</strong>: {text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}