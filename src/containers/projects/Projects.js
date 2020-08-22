import React, { useState } from "react";
import "./Project.css";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";

export default function Projects() {
  const [repo, _] = useState([]);

  return (
    <div className="main" id="opensource">
      <h1 className="project-title">Open Source Projects</h1>
      <div className="repo-cards-div-main">
        {repo.map((v, i) => {
          return <GithubRepoCard repo={v} key={v.node.id} />;
        })}
      </div>
      <Button text={"More Projects"} className="project-button" href="https://github.com/hrishi1999" newTab={true} />
    </div>
  );
}
