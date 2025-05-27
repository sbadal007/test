import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./EnvelopePage.css";

export default function EnvelopePage() {
  const navigate = useNavigate();

  const handleClick = () => {
    setTimeout(() => navigate("/invite"), 1600);
  };

  return (
    <div className="envelope-wrapper" onClick={handleClick}>
      <motion.div
        className="envelope"
        initial={{ rotateX: 0 }}
        animate={{ rotateX: 180 }}
        transition={{ duration: 1.5 }}
      >
        <div className="flap"></div>
        <div className="letter">
          <h1>You’re Invited!</h1>
          <p>Tap to reveal your invitation</p>
        </div>
      </motion.div>
    </div>
  );
}
