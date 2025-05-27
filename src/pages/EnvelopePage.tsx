import "./EnvelopePage.css";

export function EnvelopePage({ onOpen }: { onOpen: () => void }) {
  return (
    <div className="envelope-container" onClick={onOpen}>
      <div className="envelope">
        <div className="flap"></div>
        <div className="letter">
          <p>You're Invited!</p>
          <p>Click to Open</p>
        </div>
        <div className="front"></div>
      </div>
    </div>
  );
}
