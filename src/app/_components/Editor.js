import NewProject from "./NewProject";
import NoProjectSelected from "./NoProjectSelected";
import SelectedProject from "./SelectedProject";

export default function Editor({ onStartAddProject, projectState, onAdd, selectedProject, handleDelete }) {
  const isProjectUndefined = projectState.selectedProjectId;

  return (
    <section className="p-3 w-full">
      {isProjectUndefined === undefined ? (
        <NoProjectSelected onStartAddProject={onStartAddProject} />
      ) : isProjectUndefined === null ? (
        <NewProject onAdd={onAdd} />
      ) : (
        <SelectedProject project={selectedProject} handleDelete={handleDelete}/>
      )}
    </section>
  );
}
