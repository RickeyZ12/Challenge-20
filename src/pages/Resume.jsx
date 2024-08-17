import React from 'react';

const Resume = () => {
  const proficiencies = [
    'JavaScript',
    'React',
    'Node.js',
    'Express',
    'MongoDB',
    'SQL',
    // Add more proficiencies here
  ];

  return (
    <section>
      <h2>Resume</h2>
      <p>
        <a href="path-to-your-resume.pdf" download>
          Download My Resume
        </a>
      </p>
      <h3>Proficiencies</h3>
      <ul>
        {proficiencies.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Resume;
