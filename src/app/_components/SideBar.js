import Button from "../ui/Button";

export default function Sidebar({onStartAddProject, projects, onSelectProject, selectedProjectId}) {
  return (
    <aside className="bg-stone-900 p-5 rounded-r-lg w-1/3 h-[80vh]">
        <div className="">
            <h1 className="text-2xl md:text-3xl font-semibold text-white">Your Tasks</h1>
            <div className="mt-5">
                <Button className={'bg-yellow-50 hover:bg-stone-200 text-black px-2 py-2'} handleChange={onStartAddProject}>
                   + Add Projects
                </Button>
            </div>
        </div>
        <ul className="mt-10">
          {projects.map((item)=>

          {
            let cssClasses = 'w-full px-2 py-1 rounded-sm text-lg text-left mt-3 text-stone-600 bg-stone-500 hover:bg-stone-100';
            if(item.id === selectedProjectId) {
              cssClasses += ' bg-stone-50 text-black'
            } else {
              cssClasses += ' text-black'
            }

            return (

              <li key={item.id}>
                <button  

                className={cssClasses} 
                onClick={() => {onSelectProject(item.id)}}>

                 {item.title}

               </button>
              </li>
            )
          }
            
          )}
        </ul>
    </aside>
  )
}
