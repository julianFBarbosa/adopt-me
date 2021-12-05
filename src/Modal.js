import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");

const Modal = ({ children }) => {
  if (!modalRoot) return null;

  return createPortal(<div>{children}</div>, modalRoot);
};

export default Modal;
