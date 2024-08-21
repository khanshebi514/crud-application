"use client";

import Sidebar from "./_components/SideBar";
import Editor from "./_components/Editor";
import { useEffect, useState } from "react";

export default function Home() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });


//add and loading data from local storage..
useEffect(() => {
  const storedProjects = localStorage.getItem('projectsState');
  if (storedProjects) {
    try {
      console.log("Loading from local storage:", JSON.parse(storedProjects));
      setProjectsState(JSON.parse(storedProjects));
    } catch (error) {
      console.error("Error parsing localStorage data: ", error);
    }
  }
}, []);

useEffect(() => {
  if (projectsState.projects.length > 0 || projectsState.selectedProjectId !== undefined) {
    console.log("Saving to local storage:", projectsState);
    localStorage.setItem('projectsState', JSON.stringify(projectsState));
  }
}, [projectsState]);

//handling all functions related to add and starting a project
  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleSelectProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState((prevstate) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prevstate,
        projects: [...prevstate.projects, newProject],
        selectedProjectId: newProject.id,
      };
    });
  }

  function handleDeleteProject (){
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId)
      };
    });
  }
  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  console.log(projectsState);
  
  return (
    <main>
      <div className="container flex gap-3">
        <Sidebar
          onStartAddProject={handleStartAddProject}
          projects={projectsState.projects}
          onSelectProject={handleSelectProject}
          selectedProjectId={projectsState.selectedProjectId}
        />

        <Editor
          
          onStartAddProject={handleStartAddProject}
          projectState={projectsState}
          onAdd={handleAddProject}
          selectedProject = {selectedProject}
          handleDelete = {handleDeleteProject}
        />
      </div>
    </main>
  );
}
