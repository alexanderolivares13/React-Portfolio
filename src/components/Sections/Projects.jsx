import projectsArray from "../jsxArrays/projects";
import Card from "../Card/Card";

const Projects = () => {
  return (
    <div className='content-cards'>
      {projectsArray.map((projects) => (
        <Card key={projects.id} projectsArray={projects} />
      ))}
    </div>
  );
};

export default Projects;
