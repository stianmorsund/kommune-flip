import { Button } from "./Button";
import Modal from "./Modal";

export const Credits = () => {
  return (
    <Modal>
      <h1 className="text-4xl font-bold mb-4">Credits</h1>
      <p className="text-xl py-4">For KS Digital, JavaZone 2026.</p>
      <div className="text-center">
        <Button onClick={() => window.location.reload()}>Ok</Button>
      </div>
    </Modal>
  );
};

export default Modal;
