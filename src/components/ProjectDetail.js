import { useParams } from "react-router-dom";
import projectList from "../utils/mockData";
const ProjectDetail = () => {
  const { id } = useParams();
  return (
    <div className="projectDetails">
      <img alt="Project Image" src={projectList[id - 1].imgsrc} />
      <div className="details">
        <h1>{projectList[id - 1].title}</h1>
        <h2>HEAD OF PROJECT: {projectList[id - 1].Head}</h2>
        <h2>ELIGIBLE YEARS: {projectList[id - 1].Year.join(", ")}</h2>
        <h2>TECH STACK: {projectList[id - 1].technologies.join(", ")}</h2>
        <button>APPLY NOW</button>
      </div>
    </div>
  );
};
export default ProjectDetail;
