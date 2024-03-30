import { useParams } from "react-router-dom";
import projectList from "../data/mockData";
import { applyProject, leaveProject } from "../utils/appliedProjectSlice";
import { useDispatch, useSelector } from "react-redux";
const ProjectDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const isApplied = useSelector((store) =>
    store.appliedProject.projects.find((project) => project.ID == id)
  );
  return (
    <div class="flex flex-wrap bg-teal-400">
      <img
        class="w-96 h-96 relative z=0"
        alt="Project Image"
        src={projectList[id - 1].imgsrc}
      />
      <div class="m-3 p-3">
        <h1 class="text-3xl font-bold font-sans">
          {projectList[id - 1].title}
        </h1>
        <h2>HEAD OF PROJECT: {projectList[id - 1].Head}</h2>
        <h2>ELIGIBLE YEARS: {projectList[id - 1].Year.join(", ")}</h2>
        <h2>TECH STACK: {projectList[id - 1].technologies.join(", ")}</h2>
        <button
          onClick={() => {
            if (isApplied) {
              //THE PROJECT IS ALREADY APPLIED FOR THEREFORE UNAPPLY IT
              dispatch(leaveProject(id));
            } else {
              dispatch(applyProject({ ID: id, isEnrolled: false })); //created an object with ID and isEnrolled to be stored in projects[] in the redux store
            }
          }}
          class="m-2 middle none center rounded-lg bg-white py-1 px-1 font-sans text-sm font-bold uppercase text-black shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          {isApplied != undefined ? "APPLIED" : "APPLY NOW"}
        </button>
      </div>
    </div>
  );
};
export default ProjectDetail;
