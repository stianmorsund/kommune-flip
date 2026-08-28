import { Dialog } from "@ks-digital/designsystem-react";

type ModalProps = {
  children: React.ReactNode;
  onClose?: () => void;
};

const Modal = ({ children, onClose }: ModalProps) => {
  return (
    <Dialog
      open
      closeButton={false}
      closedby={onClose ? "closerequest" : "none"}
      onCancel={onClose ? undefined : (event) => event.preventDefault()}
      onClose={onClose}
      data-size="lg"
    >
      {children}
    </Dialog>
  );
};

export default Modal;
