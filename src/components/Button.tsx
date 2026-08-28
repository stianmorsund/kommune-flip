import { Button as DesignSystemButton } from "@ks-digital/designsystem-react";
import type { ComponentProps } from "react";

type ButtonProps = ComponentProps<typeof DesignSystemButton>;

export const Button = (props: ButtonProps) => {
  return (
    <DesignSystemButton
      type="button"
      data-size="lg"
      className="z-20 mt-8"
      {...props}
    />
  );
};
