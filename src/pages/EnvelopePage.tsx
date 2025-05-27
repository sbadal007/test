import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./EnvelopePage.css";

export function EnvelopePage() {
  const navigate = useNavigate();

  const handleClick = () => {
    setTimeout(() => navigate("/invite"), 1500);
  };

  return (
    <div className="envelope-wrapper">
      <motion.div
        className="envelope"
        onClick={handleClick}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="flap" />
        <div className="paper">
          <h2>You're Invited!</h2>
          <p>Click to open the wedding invitation</p>
        </div>
        <div className="bottom" />
      </motion.div>
      <p className="click-note">Tap the envelope to reveal love's celebration 💌</p>
    </div>
  );
}
