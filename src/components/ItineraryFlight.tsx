import { motion } from "framer-motion";
import "./ItineraryFlight.css";

export default function ItineraryFlight() {
  return (
    <div className="flight-container">
      <span className="label left">
        USA{" "}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/42/Animated-Flag-USA.gif"
          alt="USA Flag"
          className="flag"
        />
      </span>
      <span className="label right">
        Nepal{" "}
        <img
          src="https://cdn.pixabay.com/animation/2023/05/17/02/45/02-45-09-801_512.gif"
          alt="Nepal Flag"
          className="flag"
        />
      </span>

      <svg className="flight-path" viewBox="0 0 1000 200">
        <path
          id="flight-path"
          d="M 50 150 Q 500 0, 950 150"
          fill="transparent"
          stroke="#f8c3d3"
          strokeWidth="2"
          strokeDasharray="5,5"
        />

        <image
          href="https://media0.giphy.com/media/j6wXZ0PAa4gBw99Kmh/giphy.gif?cid=6c09b952m205leb8mzhme0jhzqakax7vy41o47rend0zc1ph&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          className="plane-icon"
        >
          <animateMotion
            repeatCount="indefinite"
            dur="8s"
            keyPoints="0;1"
            keyTimes="0;1"
            calcMode="linear"
          >
            <mpath href="#flight-path" />
          </animateMotion>
        </image>

        {[...Array(6)].map((_, i) => (
          <motion.circle
            key={i}
            r="4"
            fill="#ff8da1"
            animate={{ opacity: [1, 0], scale: [1, 2] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 1.5,
            }}
          >
            <animateMotion dur="8s" repeatCount="indefinite">
              <mpath href="#flight-path" />
            </animateMotion>
          </motion.circle>
        ))}
      </svg>
    </div>
  );
}
