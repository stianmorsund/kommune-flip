import classNames from "classnames";
import { createRef, useEffect, useState } from "react";
import { Heading } from "@ks-digital/designsystem-react";
import { Kommune } from "../assets/kommuner";


interface CardProps {
  index: number;
  kommune: Kommune;
  isFlipped: boolean;
  cardFlipDuration: number;
  handleClick: (index: number) => void;
}

const Card = ({
  index,
  kommune,
  isFlipped,
  handleClick,
  cardFlipDuration,
}: CardProps) => {
  const cardRef = createRef<HTMLButtonElement>();
  const glowRef = createRef<HTMLDivElement>();
  const [bounds, setBounds] = useState<DOMRect>();

  useEffect(() => {
    const currentCard = cardRef.current!;
    const currentGlowRef = glowRef.current!;
    const rotateToMouse = (event: MouseEvent) => {
      if (!bounds || isFlipped) return;

      const mouseX = event.clientX;
      const mouseY = event.clientY;
      const leftX = mouseX - bounds.x;
      const topY = mouseY - bounds.y;
      const center = {
        x: leftX - bounds.width / 2,
        y: topY - bounds.height / 2,
      };
      currentGlowRef.style.backgroundImage = `
        radial-gradient(
          circle at
          ${center.x * 2 + bounds.width / 2}px
          ${center.y * 2 + bounds.height / 2}px,
          #ffffff55,
          #0000000f
        )
      `;
    };

    currentCard.addEventListener("mouseenter", () => {
      const cardBounds = currentCard.getBoundingClientRect();
      setBounds(cardBounds);
      currentCard.addEventListener("mousemove", rotateToMouse);
    });
    currentCard.addEventListener("mouseleave", () => {
      currentCard.style.transform = "none";
      currentCard.style.background = "none";
      currentGlowRef.style.backgroundImage = "";
      currentCard.removeEventListener("mousemove", rotateToMouse);
    });
  }, [bounds, cardRef, glowRef, isFlipped]);


  const handleCardClick = () => {
    handleClick(index);
  };

  return (
    <button
      aria-expanded={isFlipped}
      aria-atomic={false}
      ref={cardRef}
      className={classNames(
        "relative cursor-pointer select-none duration-150 shadow-card hover:shadow-card-hover transition-transform-shadow rounded-xl overflow-hidden focus-visible:ring-8 focus-visible:ring-focus focus-visible:ring-offset-2 w-full h-full",
        {
          "pointer-events-none": isFlipped,
        }
      )}
      onClick={handleCardClick}
    >
      <div
        style={{ transformStyle: "preserve-3d" }}
        className={classNames(
          `wrap-break-word absolute inset-0 transition-transform duration-${cardFlipDuration}`,
          {
            "transform rotate-y-180": isFlipped,
          }
        )}
      >
        {/* Back of card with kommunelogo */}
        <div
          role="status"
          className={classNames(
            "absolute w-full h-full flex justify-center content-center bg-white rounded-xl transform rotate-y-180 flex-col"
          )}
        >
          <img
            src={kommune.image}
            alt=""
            className="min-h-0 max-w-full object-contain p-2 mx-auto my-0 backface-hidden"
          />
          <Heading
            level={2}
            data-size="xs"
            className="text-center p-2 shrink-0"
            aria-hidden={!isFlipped}
          >
            {kommune.navn}
          </Heading>
        </div>

        {/* Front of card */}
        <div
          className={classNames(
            "absolute inset-0 bg-blue-600 backface-hidden transform rotate-y-0 flex items-center justify-center rounded-xl"
          )}
        >
          <div
            ref={glowRef}
            className="absolute w-full h-full left-0 top-0 bg-custom-radial"
          ></div>

          <h2 className="sr-only" aria-hidden={isFlipped}>
            Flipp kort nummer {index + 1}
          </h2>

          <img
            src="/ks-logo-negative.png"
            alt=""
            className="w-10 h-10 sm:w-20 sm:h-20"
          />
        </div>
      </div>
    </button>
  );
};

export default Card;
