import ProjectCard from "./ProjectCard";
import projectList from "../data/mockData";
import { useState } from "react";
import useFilter from "../utils/useFilter";
const Body = () => {
  const [ProjectList, setProjectList] = useState(projectList);
  return (
    <div>
      <div className="filter">
        <button
          className="WEB"
          onClick={() => {
            setProjectList(useFilter("WEB", projectList));
          }}
        >
          WEB PROJECT
        </button>
        <button
          className="ANDROID"
          onClick={() => {
            setProjectList(useFilter("APP", projectList));
          }}
        >
          ANDROID PROJECT
        </button>
        <button
          className="ALL"
          onClick={() => {
            setProjectList(useFilter("ALL", projectList));
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
