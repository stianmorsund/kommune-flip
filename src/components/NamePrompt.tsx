import {
  Field,
  Heading,
  Input,
  Label,
  Paragraph,
} from "@ks-digital/designsystem-react";
import { useState } from "react";
import { Button } from "./Button";
import Modal from "./Modal";

type NamePromptProps = {
  onTypedName: (name: string) => void;
  time: number;
};

export const NamePrompt = ({ onTypedName, time }: NamePromptProps) => {
  const [name, setName] = useState("");
  return (
    <Modal>
      <div className="flex flex-col gap-4">
        <Heading level={1} data-size="md">
          Bra jobbet! Du brukte {time} sekunder, noe som er blant de 10 beste!
        </Heading>
        <Paragraph>
          Hva heter du? Fornavn eller nickname holder. For ordens skyld lagrer
          vi ingen data.
        </Paragraph>
        <Field>
          <Label>Ditt navn</Label>
          <Input
            placeholder="Flippus Maximus"
            autoComplete="off"
            name="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </Field>
      </div>
      <Button onClick={() => onTypedName(name)}>Send inn</Button>
    </Modal>
  );
};

export default Modal;
