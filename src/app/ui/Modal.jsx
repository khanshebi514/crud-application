import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef( function Modal({children, buttonCaption}, ref) {
    const dialog = useRef()

useImperativeHandle(ref, ()=>{
    return {
        open(){
           dialog.current.showModal()
        }
    }
})

  return createPortal(
    <dialog ref={dialog} className="p-5 rounded-2xl backdrop:bg-stone-700">
        {children}
        <form className="mt-10">
            <button className="px-2 py-1 bg-black text-white rounded-lg">
                {buttonCaption}
            </button>
        </form>
    </dialog>, document.getElementById('modal-root')
  )
});

export default Modal;
