import { ButtonHTMLAttributes, forwardRef } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <button
        type="button"
        ref={ref}
        {...props}
        className="z-20 bg-blue-900 text-white text-3xl text-bold px-10 py-4 mt-8 rounded-xl hover:scale-110 transition-all shadow-white shadow-xs hover:shadow-lg hover:shadow-white outline-hidden focus-visible:ring-4 focus-visible:ring-offset-4 focus-visible:ring-offset-focus select-none"
      >
        {children}
      </button>
    );
  }
);
