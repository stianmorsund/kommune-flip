type Bubble = {
  /** Horizontal position, in % of viewport width. */
  left: number;
  /** Diameter, in px. */
  size: number;
  /** Time to rise from the bottom to the surface. */
  duration: string;
  delay: string;
  /** Time for one side-to-side wobble. */
  wobble: string;
  opacity: number;
};

const bubbles: Bubble[] = [
  { left: 6, size: 22, duration: "16s", delay: "-3s", wobble: "3.5s", opacity: 0.5 },
  { left: 13, size: 12, duration: "11s", delay: "-8s", wobble: "2.4s", opacity: 0.4 },
  { left: 21, size: 34, duration: "21s", delay: "-14s", wobble: "4.6s", opacity: 0.55 },
  { left: 29, size: 16, duration: "13s", delay: "-1s", wobble: "2.8s", opacity: 0.45 },
  { left: 38, size: 26, duration: "18s", delay: "-11s", wobble: "3.9s", opacity: 0.5 },
  { left: 47, size: 9, duration: "10s", delay: "-6s", wobble: "2.1s", opacity: 0.35 },
  { left: 55, size: 44, duration: "24s", delay: "-19s", wobble: "5.2s", opacity: 0.5 },
  { left: 64, size: 18, duration: "14s", delay: "-4s", wobble: "3.1s", opacity: 0.45 },
  { left: 72, size: 28, duration: "19s", delay: "-15s", wobble: "4.2s", opacity: 0.55 },
  { left: 81, size: 14, duration: "12s", delay: "-9s", wobble: "2.6s", opacity: 0.4 },
  { left: 89, size: 38, duration: "22s", delay: "-2s", wobble: "4.8s", opacity: 0.5 },
  { left: 95, size: 20, duration: "15s", delay: "-12s", wobble: "3.3s", opacity: 0.45 },
];

export const Bubbles = () => {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {bubbles.map((bubble, index) => (
        <div
          key={index}
          className="absolute bottom-0 animate-rise"
          style={{
            left: `${bubble.left}%`,
            animationDuration: bubble.duration,
            animationDelay: bubble.delay,
          }}
        >
          <div
            className="rounded-full animate-wobble"
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              opacity: bubble.opacity,
              animationDuration: bubble.wobble,
              background:
                "radial-gradient(circle at 32% 28%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.35) 20%, rgba(255,255,255,0.05) 55%, rgba(255,255,255,0.18) 100%)",
              boxShadow: "inset 0 0 6px rgba(255,255,255,0.45)",
              border: "1px solid rgba(255,255,255,0.35)",
            }}
          />
        </div>
      ))}
    </div>
  );
};
