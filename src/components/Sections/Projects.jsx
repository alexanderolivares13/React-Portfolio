import projectsArray from "../jsxArrays/projects";
import Card from "../Card/Card";

const Projects = () => {
  return (
    <div className='content-cards'>
      <h2>Projects:</h2>
      <div style={{ width: "100%" }}>
        *Click on the image to be taken to the deployed site
      </div>
      {projectsArray.map((projects) => (
        <Card key={projects.id} projectsArray={projects} />
      ))}
    </div>
  );
};

export default Projects;
