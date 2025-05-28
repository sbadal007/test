import { motion } from "framer-motion";
import { useState } from "react";
import "./EnvelopePage.css";
import { HeartsRain } from "../components/HeartsRain";

export default function EnvelopePage({ onOpen }: { onOpen: () => void }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    if (!open) {
      setOpen(true);
      setTimeout(onOpen, 1600);
    }
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
        {open && <HeartsRain />}
      </div>
    </div>
  );
}
