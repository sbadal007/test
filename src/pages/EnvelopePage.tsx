import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./EnvelopePage.css";

export default function EnvelopePage() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    if (!open) {
      setOpen(true);
      setTimeout(() => navigate("/invite"), 1800);
    }
  };

  return (
    <div className="envelope-wrapper" onClick={handleOpen}>
      <div className="envelope">
        <motion.div
          className="flap"
          initial={false}
          animate={open ? { rotateX: -160 } : { rotateX: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
        <div className="letter">
          <h1>You’re Invited!</h1>
          <p>Click the envelope to open</p>
        </div>
      </div>
    </div>
  );
}
