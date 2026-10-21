import classNames from "classnames";
import { memo, useCallback } from "react";
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
  const handleCardClick = useCallback(() => {
    handleClick(index);
  }, [handleClick, index]);

  return (
    <button
      type="button"
      aria-expanded={isFlipped}
      aria-atomic={false}
      style={{ touchAction: "manipulation", WebkitTapHighlightColor: "transparent" }}
      className={classNames(
        "group relative cursor-pointer select-none rounded-xl focus-visible:ring-8 focus-visible:ring-focus focus-visible:ring-offset-2 w-full h-full",
        {
          "pointer-events-none": isFlipped,
        }
      )}
      onClick={handleCardClick}
    >
      <div
        style={{
          transformStyle: "preserve-3d",
          // Inline, because `duration-${cardFlipDuration}` is a dynamic class
          // name that Tailwind never generates, leaving the flip unanimated.
          transitionDuration: `${cardFlipDuration}ms`,
        }}
        className={classNames(
          "wrap-break-word absolute inset-0 transition-transform",
          {
            "transform rotate-y-180": isFlipped,
          }
        )}
      >
        {/* Back of card with kommunelogo */}
        <div
          role="status"
          className={classNames(
            "absolute w-full h-full flex justify-center content-center bg-white rounded-xl transform rotate-y-180 flex-col backface-hidden shadow-card"
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
        {/* The shadow sits on the faces, not the button, so it rotates away
            with the card instead of leaving a full-size shadow hanging behind
            the flip. */}
        <div
          className={classNames(
            "absolute inset-0 bg-(--ds-color-accent-base-default) backface-hidden transform rotate-y-0 flex items-center justify-center overflow-hidden rounded-xl shadow-card group-hover:shadow-card-hover transition-shadow duration-150"
          )}
        >
          <div className="pointer-events-none absolute inset-1 sm:inset-1.5 rounded-lg overflow-hidden card-pattern"></div>

          <div
            className="pointer-events-none absolute w-full h-full left-0 top-0 bg-custom-radial"
          ></div>

          <div className="pointer-events-none absolute inset-1 sm:inset-1.5 rounded-lg border-[6px] border-white/80"></div>

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

export default memo(Card);
