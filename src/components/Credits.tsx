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
        <Paragraph data-size="sm">
          Lyd:{" "}
          <a
            className="underline"
            href="https://freesound.org/people/LittleRobotSoundFactory/sounds/270404/"
          >
            Jingle_Achievement_00
          </a>{" "}
          av LittleRobotSoundFactory (CC BY 4.0). Øvrige lyder fra freesound.org
          (CC0).
        </Paragraph>
      </div>
      <div className="text-center">
        <Button onClick={() => onClose()}>Lukk</Button>
      </div>
    </Modal>
  );
};

export default Modal;
