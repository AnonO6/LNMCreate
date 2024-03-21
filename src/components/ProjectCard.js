import { Link, json } from "react-router-dom";
const ProjectCard = (props) => {
  const link = "/Project/" + JSON.stringify(props.ID);
  return (
    <Link to={link}>
      <div className="project-card">
        <img className="project-image" src={props.imgsrc} alt="Project image" />
        <h1>{props.title}</h1>
      </div>
    </Link>
  );
};
export default ProjectCard;
