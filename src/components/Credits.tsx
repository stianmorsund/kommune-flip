import { Heading, Paragraph } from "@ks-digital/designsystem-react";
import { Button } from "./Button";
import Modal from "./Modal";

export const Credits = ({ onClose }: { onClose: () => void }) => {
  return (
    <Modal onClose={onClose}>
      <div className="flex flex-col gap-4">
        <Heading level={1} data-size="md">
          Om
        </Heading>
        <Paragraph>Laget for KS Digital, Javazone 2026.</Paragraph>
      </div>
      <div className="text-center">
        <Button onClick={() => onClose()}>Lukk</Button>
      </div>
    </Modal>
  );
};

export default Modal;
