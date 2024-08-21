import Image from "next/image";
import Button from "../ui/Button";

export default function NoProjectSelected({onStartAddProject}) {
  return (
    <secton>
        <div className="flex justify-center items-center gap-3 flex-col h-screen">
            <Image src={'/Notepad 3D Icon Model.png'} alt="notepad file icon" width={200} height={200}/>
            <h1 className="text-2xl font-semibold">No Project Selected</h1>
            <p>Select a project or get started With new one...</p>

            <Button className={'px-2 py-2 bg-black text-white '} handleChange={onStartAddProject}>Create a New Project</Button>
        </div>
    </secton>
  )
}
