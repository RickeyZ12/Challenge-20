import React from 'react';

const Project = ({ title, description, image, deployedLink, repoLink }) => (
  <div className="project">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
    <a href={deployedLink} target="_blank" rel="noopener noreferrer">Deployed App</a>
    <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
  </div>
);

export default Project;
