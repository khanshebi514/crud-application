"use client";
import Button from "../ui/Button";
import { MdDeleteForever } from "react-icons/md";

export default function SelectedProject({ project, handleDelete }) {
  console.log(project);

  const formatedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="w-full md:w-[70%] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <Button className={"bg-black text-white"} handleChange={handleDelete}>
            Delete <MdDeleteForever />
          </Button>
        </div>
        <p className="text-sm text-stone-800 mt-5">{formatedDate}</p>
        <p className="text-lg text-stone-800 mt-3">{project.description}</p>
      </header>
    </div>
  );
}
