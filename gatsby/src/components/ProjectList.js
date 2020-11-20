import { Link } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const ProjectGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 2rem;
  grid-auto-rows: auto auto 1fr;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 5%;
`;
const ProjectStyles = styled.div`
  display: grid;
  text-align: center;
  grid-template-rows: 1fr 100px;
  grid-row: span 3;
  grid-gap: 1rem;
  h2,
  p {
    margin: 0;
  }
`;
const ProjectBoxStyle = styled.div`
  padding: 2%;
`;
const InfoProject = styled.div`
  padding: 0% 23px;
  color: var(--black);
  text-align: left;
  font-size: 1.3em;
  span {
    color: #fff;
  }
  span {
    color: var(--black);
  }
`;

function SingleProject({ project }) {
  return (
    <ProjectStyles>
      <ProjectBoxStyle>
        <Link to={`/projects/${project.slug.current}`}>
          <Img fluid={project.image.asset.fluid} alt={project.name} />
        </Link>
      </ProjectBoxStyle>
      <InfoProject>
        <Link to={`${project.slug.current}`}>
          <h2>
            <span>{project.name}</span>
          </h2>
        </Link>
        <p>{project.projects.map((projects) => projects.name).join(', ')} </p>
      </InfoProject>
    </ProjectStyles>
  );
}

export default function ProjectList({ project }) {
  return (
    <ProjectGridStyles>
      {project.map((project) => (
        <SingleProject key={project.id} project={project} />
      ))}
    </ProjectGridStyles>
  );
}
