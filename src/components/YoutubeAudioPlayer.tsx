import { useEffect, useRef } from "react";

export default function YoutubeAudioPlayer({
  videoId,
  play,
}: {
  videoId: string;
  play: boolean;
}) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (play && iframeRef.current) {
      iframeRef.current.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=0&loop=1&playlist=${videoId}`;
    }
  }, [play, videoId]);

  return (
    <div style={{ width: "1px", height: "1px", opacity: 0, overflow: "hidden" }}>
      <iframe
        ref={iframeRef}
        width="1"
        height="1"
        title="Background Music"
        allow="autoplay; encrypted-media"
        allowFullScreen
        frameBorder="0"
      />
    </div>
  );
}
