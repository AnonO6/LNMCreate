const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <img className="project-image" src={props.imgsrc} alt="Project image" />
      <h1>{props.title}</h1>
      <span>
        <h3>Head of project: {props.Head}</h3>
        <h3>Year: {props.Year}</h3>
        <h3>Technologies needed: {props.technologies.join(", ")}</h3>
      </span>
    </div>
  );
};
export default ProjectCard;
