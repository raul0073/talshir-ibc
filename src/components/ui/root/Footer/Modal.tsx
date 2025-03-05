import { X } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { policyMap } from "./legal/policies";

export type ModalType = "terms" | "accessibility" | "privacy" | "impressum";

export interface ModalProps {
  type: ModalType;
  modalOn: Dispatch<SetStateAction<boolean>>;
}

function Modal({ type, modalOn }: ModalProps) {
  console.log(type);
  const legalDocType: string = type.split(" ")[0].toLocaleLowerCase();
  return (
    <section className="modal fixed left-0 top-0 w-screen h-screen bg-black flex justify-center items-center p-24 z-40 ">
      <div className="modal-content w-full sm:w-2/3 h-3/4 mx-auto p-4 sm:p-6 bg-white rounded-md shadow-lg absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-black overflow-y-scroll">
        <X onClick={() => modalOn(false)} className="float-right cursor-pointer" />
       <h1 className="text-center pb-6 text-3xl font-semibold text-appRed"> {type}</h1>
        <pre className="w-full p-1 text-pretty">
       {policyMap[legalDocType as ModalType] }
      </pre>
      </div>
      
    </section>
  );
}

export default Modal;