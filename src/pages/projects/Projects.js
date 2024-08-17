import React from "react";
import "../../containers/education/Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import ProjectCard from "../../components/degreeCard/DegreeCard.js";
import { projects } from "../../portfolio";
import { Fade } from "react-reveal";

function Projects(props) {
  const theme = props.theme;

  return (
    <div className="main" id="educations">
      <div className="educations-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="educations-header" style={{ color: theme.text }}>
            _________________________________________
          </h1>
        </Fade>
      </div>
      <div className="educations-body-div">
        {projects.projects.map((degree) => {
          return (<div>
            <br></br>
            <ProjectCard key={projects.title} degree={degree} theme={theme} />
        </div>  );
        })}
      </div>
    </div>
  );
}

export default Projects;

