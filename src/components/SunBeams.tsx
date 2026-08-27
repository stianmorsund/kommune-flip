type Beam = {
  /** Angle from vertical at the fan origin, in degrees. */
  angle: number;
  /** Extra angle added at the peak of the sway animation, in degrees. */
  sway: number;
  /** Beam width at the origin, in vw. */
  width: number;
  /** Beam length, in vh. */
  length: number;
  opacity: number;
  duration: string;
  delay: string;
  blur: number;
};

/** Every beam radiates from this point, far above the surface. */
const origin = { left: "46%", top: "-55vh" };

const beams: Beam[] = [
  {
    angle: -52,
    sway: 2.5,
    width: 4,
    length: 235,
    opacity: 0.4,
    duration: "19s",
    delay: "-4s",
    blur: 14,
  },
  {
    angle: -34,
    sway: 3.5,
    width: 5,
    length: 240,
    opacity: 0.5,
    duration: "23s",
    delay: "-1s",
    blur: 16,
  },
  {
    angle: -15,
    sway: 3,
    width: 3.5,
    length: 225,
    opacity: 0.65,
    duration: "17s",
    delay: "-13s",
    blur: 11,
  },
  {
    angle: -4,
    sway: -2.5,
    width: 2,
    length: 215,
    opacity: 0.8,
    duration: "15s",
    delay: "-3s",
    blur: 7,
  },
  {
    angle: 14,
    sway: -3.5,
    width: 1.5,
    length: 205,
    opacity: 0.75,
    duration: "12s",
    delay: "-15s",
    blur: 6,
  },
  {
    angle: 30,
    sway: 2.5,
    width: 5,
    length: 235,
    opacity: 0.55,
    duration: "25s",
    delay: "-2s",
    blur: 15,
  },
  {
    angle: 50,
    sway: 3.5,
    width: 3.5,
    length: 230,
    opacity: 0.42,
    duration: "18s",
    delay: "-5s",
    blur: 12,
  },
];

export const SunBeams = () => {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="absolute inset-x-0 top-0 h-28 animate-surface"
        style={{
          background:
            "linear-gradient(to bottom, rgba(224,252,255,0.45) 0%, rgba(165,233,255,0.15) 45%, rgba(165,233,255,0) 100%)",
        }}
      />
      <div className="absolute" style={{ left: origin.left, top: origin.top }}>
        {beams.map((beam, index) => (
          <div
            key={index}
            className="absolute top-0 left-0 mix-blend-screen animate-beam"
            style={
              {
                width: `${beam.width}vw`,
                height: `${beam.length}vh`,
                filter: `blur(${beam.blur}px)`,
                transformOrigin: "top center",
                // Narrow at the origin, so only the already-fanned part is on screen.
                clipPath: "polygon(46% 0%, 54% 0%, 100% 100%, 0% 100%)",
                background:
                  "linear-gradient(to bottom, rgba(224,252,255,0) 0%, rgba(224,252,255,0.8) 25%, rgba(165,233,255,0.45) 55%, rgba(125,211,252,0.12) 80%, rgba(125,211,252,0) 100%)",
                animationDuration: beam.duration,
                animationDelay: beam.delay,
                "--beam-opacity": beam.opacity,
                "--beam-tilt": `${beam.angle}deg`,
                "--beam-sway": `${beam.angle + beam.sway}deg`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
    </div>
  );
};
