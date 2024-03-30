import ProjectCard from "./ProjectCard";
import projectList from "../data/mockData";
import { useState } from "react";
import useFilter from "../utils/useFilter";
const Body = () => {
  const [ProjectList, setProjectList] = useState(projectList);
  return (
    <div>
      <div class="flex justify-evenly w-1/2">
        <button
          class="middle none center rounded-lg bg-teal-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          onClick={() => {
            setProjectList(useFilter("WEB", projectList));
          }}
        >
          WEB PROJECT
        </button>
        <button
          class="middle none center rounded-lg bg-teal-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          onClick={() => {
            setProjectList(useFilter("ALL", projectList));
          }}
        >
          ALL PROJECTS
        </button>
        <button
          class="middle none center rounded-lg bg-teal-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          onClick={() => {
            setProjectList(useFilter("APP", projectList));
          }}
        >
          ANDROID PROJECT
        </button>
      </div>
      <div class="flex flex-wrap p-4 m-4">
        {ProjectList.map((project) => {
          return <ProjectCard key={project.ID} {...project} />;
        })}
      </div>
    </div>
  );
};
export default Body;
