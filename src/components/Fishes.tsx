type Fish = {
  src: string;
  /** Vertical position, in % of viewport height. */
  top: number;
  /** Width, in px. */
  size: number;
  /** Swim direction across the screen. */
  direction: "right" | "left";
  /** Time for one crossing. */
  duration: string;
  delay: string;
  opacity: number;
};

const fishes: Fish[] = [
  {
    src: "/fish2.png",
    top: 18,
    size: 90,
    direction: "right",
    duration: "38s",
    delay: "-6s",
    opacity: 0.75,
  },
  {
    src: "/fish.png",
    top: 34,
    size: 150,
    direction: "left",
    duration: "52s",
    delay: "-24s",
    opacity: 0.9,
  },
  {
    src: "/fish.png",
    top: 62,
    size: 55,
    direction: "right",
    duration: "29s",
    delay: "-14s",
    opacity: 0.6,
  },
  {
    src: "/fish2.png",
    top: 78,
    size: 210,
    direction: "left",
    duration: "64s",
    delay: "-40s",
    opacity: 0.85,
  },
  {
    src: "/fish2.png",
    top: 48,
    size: 40,
    direction: "right",
    duration: "24s",
    delay: "-3s",
    opacity: 0.5,
  },
];

export const Fishes = () => {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {fishes.map((fish, index) => (
        <img
          key={index}
          src={fish.src}
          alt=""
          className="absolute left-0 animate-swim"
          style={
            {
              top: `${fish.top}%`,
              width: `${fish.size}px`,
              opacity: fish.opacity,
              animationDuration: fish.duration,
              animationDelay: fish.delay,
              // Artwork faces right, so left-swimmers play the path backwards and mirror.
              animationDirection: fish.direction === "left" ? "reverse" : "normal",
              "--fish-flip": fish.direction === "left" ? -1 : 1,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
};
