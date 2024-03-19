import React from "react";
import ReactModal from "react-modal";
import { LeftArrowIcon } from "../../assets/icons";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderWidth: "0px",
  },
};

ReactModal.setAppElement("#root");

interface Props {
  isOpen?: boolean;
  shouldCloseOnOverlayClick?: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  title?: string;
}

const Modal: React.FC<Props> = ({
  isOpen = false,
  onClose,
  children,
  title,
  shouldCloseOnOverlayClick=false
}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Example Modal"
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      preventScroll
    >
      <div className="max-h-screen overflow-y-auto">

      {title && (
        <div className="mb-6 flex items-center space-x-3">
          <div className="cursor-pointer" onClick={onClose} ><LeftArrowIcon /></div>
          <h3 className="font-bold text-sm" >{title}</h3>
        </div>
      )}
      <section className="w-full md:w-[400px] min-h-[400px] p-4 py-6 rounded bg-white border border-gray-200">
        {children}
      </section>
      </div>
    </ReactModal>
  );
};

export default Modal;
