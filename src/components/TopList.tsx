import { Heading, Paragraph } from "@ks-digital/designsystem-react";
import { Button } from "./Button";
import Modal from "./Modal";

export interface Result {
  time: number;
  name: string;
}

interface TopListProps {
  top10: Result[];
  currentResult: Result;
}

export const TopList = ({ top10, currentResult }: TopListProps) => {
  return (
    <Modal>
      <div className="flex flex-col gap-4">
        <Heading level={1} data-size="md">
          Bra jobbet, {currentResult.name}
        </Heading>
        <Paragraph>
          Du brukte <em>{currentResult.time}</em> sekunder. Her er topp 10:
        </Paragraph>
        <ol className="text-xl">
          {top10.map((entry, index) => (
            <li key={index} className="flex justify-between border-b-2 py-4">
              <span>
                {index + 1}. {entry.name} {index === 0 && "👑"}
              </span>
              <span>{entry.time} sekunder</span>
            </li>
          ))}
        </ol>
      </div>
      <div className="text-center">
        <Button onClick={() => window.location.reload()}>Spill igjen</Button>
      </div>
    </Modal>
  );
};

export default Modal;
