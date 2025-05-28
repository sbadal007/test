import { useEffect } from "react";
import "./SplashScreen.css";

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 2000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash-screen">
      <h1 className="romantic-quote">Two souls, one heart.</h1>
    </div>
  );
}
