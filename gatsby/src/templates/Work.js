import { graphql } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const WorkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  grid-gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 3%;
`;

export default function SingleWorkPage({ data: { works } }) {
  return (
    <WorkGrid>
      <Img fluid={works.image.asset.fluid} />
      <div>
        <h2 className="mark">{works.name}</h2>
        <ul>
          {works.projects.map((project) => (
            <li key={project.id}>{project.name}</li>
          ))}
        </ul>
        <p>{works.project}</p>
      </div>
    </WorkGrid>
  );
}
// this needs to be dynamic based on the slug passed in via context in grasby-node.js
export const query = graphql`
  query($slug: String!) {
    works: sanityWorks(slug: { current: { eq: $slug } }) {
      name
      project
      id
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
      projects {
        name
        id
        shopify
      }
    }
  }
`;
