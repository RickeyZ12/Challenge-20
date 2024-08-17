import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
  const projects = [
    {
      title: 'RU Campus Cuisine',
      description: 'Webiste for a Restaurant.',
      image: 'path-to-image-1.jpg',
      deployedLink: 'https://rickeyz12.github.io/RU-Campus-Cuisine/',
      repoLink: 'https://github.com/RickeyZ12/RU-Campus-Cuisine'
    },
    {
      title: 'Project 2',
      description: 'E-Commerce Site.',
      image: 'path-to-image-2.jpg',
      deployedLink: 'https://traders-johns-e-commerce-site.onrender.com/',
      repoLink: 'https://github.com/zmuda44/Traders-Johns-E-commerce-site'
    },
    // Add more projects here
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            deployedLink={project.deployedLink}
            repoLink={project.repoLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
