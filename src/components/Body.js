import ProjectCard from "./ProjectCard";
import projectList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  const [ProjectList, setProjectList] = useState(projectList);
  return (
    <div>
      <div className="filter">
        <button
          className="WEB"
          onClick={() => {
            setProjectList(
              projectList.filter((project) => project.type == "WEB")
            );
          }}
        >
          WEB PROJECT
        </button>
        <button
          className="ANDROID"
          onClick={() => {
            setProjectList(
              projectList.filter((project) => project.type == "APP")
            );
          }}
        >
          ANDROID PROJECT
        </button>
        <button
          className="ALL"
          onClick={() => {
            setProjectList(projectList);
          }}
        >
          ALL PROJECTS
        </button>
      </div>
      <div className="project-container">
        {ProjectList.map((project) => {
          return <ProjectCard key={project.ID} {...project} />;
        })}
      </div>
    </div>
  );
};
export default Body;
