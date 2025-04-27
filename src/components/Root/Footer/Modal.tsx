import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Dispatch, SetStateAction } from "react";
import { policyMap } from "./legal/policies";

export type ModalType = "terms" | "accessibility" | "privacy" ;

export interface ModalProps {
  type: ModalType;
  modalOn: Dispatch<SetStateAction<boolean>>;
  locale: string
}

function Modal({ type, modalOn, locale }: ModalProps) {
  const legalDocType: string = type.split(" ")[0].toLowerCase();
  return (
    <Dialog open onOpenChange={modalOn}>
      <DialogContent className="w-[90%] max-w-none h-[80vh] flex flex-col p-6 overflow-hidden">
        <DialogHeader className="flex justify-between items-center border-b pb-4">
          <DialogTitle className="text-appRed text-center uppercase text-3xl font-semibold flex-1">
            {type}
          </DialogTitle>
        </DialogHeader>
        <div className="flex-1 overflow-auto p-4">
          <pre className={`w-full whitespace-pre-wrap break-words text-pretty ${locale === 'he' ? 'text-right' : ''}`}>
            {policyMap[legalDocType as ModalType]}
          </pre>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default Modal;