import { useRef } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Modal from "../ui/Modal";

export default function NewProject({onAdd}) {

  const modal = useRef()

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const handleSave = ()=>{
    const enterdTitle = title.current.value;
    const enterdDescription = description.current.value;
    const enterdDueDate = dueDate.current.value

    //validation ...

    if(
      enterdTitle.trim() === '' || 
      enterdDescription.trim() === '' || 
      enterdDueDate.trim() === ''
    ) {

      modal.current.open();
      return;
    }


    onAdd({
      title : enterdTitle,
      description:enterdDescription,
      dueDate : enterdDueDate,
    })
  }
  return (
    <>
    <Modal ref={modal} buttonCaption="Close">
      <div className="w-full flex justify-start items-start flex-col gap-3">
        <h2 className="text-2xl text-stone-900">Invaild Input</h2>
        <p className="text-stone-800">Opps. you entered Invaild Data ...</p>
        <p className="text-stone-800">do not leave the Input empty...</p>
      </div>
    </Modal>
    <div className="mt-16 w-full md:w-[70%]">
      <menu className="flex justify-end items-center gap-3">
        <li><Button className="hover:bg-slate-400 bg-black text-white">Cancel</Button></li>
        <li><Button className="hover:bg-slate-400 bg-black text-white" handleChange={handleSave}>Save</Button></li>
      </menu>
        <div>
          <Input ref={title} label="Title"/>
          <Input ref={description}  label="Description" isTextArea/>
          <Input ref={dueDate} type={'date'} label="Due Date"/>
        </div>
    </div>
    </>
    
  );
}
