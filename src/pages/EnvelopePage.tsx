import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./EnvelopePage.css";

export default function EnvelopePage() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    setTimeout(() => navigate("/invite"), 1600);
  };

  return (
    <div className="envelope-wrapper" onClick={handleOpen}>
      <div className="envelope">
        <motion.div
          className="flap"
          initial={{ rotateX: 0 }}
          animate={open ? { rotateX: -120 } : {}}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        <div className="letter">
          <h1>You’re Invited!</h1>
          <p>Tap the envelope to open</p>
        </div>
      </div>
    </div>
  );
}
