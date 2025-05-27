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
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            You're Invited!
          </motion.h2>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Click to open the wedding invitation
          </motion.p>
        </div>
        <div className="bottom" />
      </motion.div>
      <p className="click-note">Tap the envelope to reveal love's celebration 💌</p>
    </div>
  );
}
