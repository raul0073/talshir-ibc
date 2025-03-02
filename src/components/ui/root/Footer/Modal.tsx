import { X } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

export type ModalType = "terms" | "accessibility" | "privacy" | "impressium";

export interface ModalProps {
  type: ModalType;
  modalOn: Dispatch<SetStateAction<boolean>>;
}

function Modal({ type, modalOn }: ModalProps) {
  
  return (
    <section className="modal fixed left-0 top-0 w-screen h-screen bg-black flex justify-center items-center p-24">
      <div className="modal-content w-1/3 h-fit mx-auto p-6 bg-white rounded-md shadow-lg absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-black">
        {type}
        <X onClick={() => modalOn(false)} />
        <div className="w-44 ">
       
      </div>
      </div>
      
    </section>
  );
}

export default Modal;