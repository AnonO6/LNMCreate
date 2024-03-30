import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const ProjectCard = (props) => {
  const link = "/Project/" + JSON.stringify(props.ID);
  const appliedProject = useSelector((store) => store.appliedProject.projects);
  console.log(appliedProject);
  return (
    <Link to={link}>
      <div class="border-solid border-2 border-black bg-teal-600 w-96 h-96 m-4 ">
        <img class=" w-96 h-72" src={props.imgsrc} alt="Project image" />
        <h1 class="font-sans text-white text-center text-4xl mt-3">
          {props.title}
        </h1>
      </div>
    </Link>
  );
};
export default ProjectCard;
