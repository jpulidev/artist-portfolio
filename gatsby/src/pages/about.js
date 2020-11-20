import { graphql, Link } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import SEO from '../components/SEO';

const StaffGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(550px, 1fr));
  padding-bottom: 5%;
@media screen and (max-width:1000px){

  grid-template-columns: 1fr;
}
  `;

const StaffStyles = styled.div`
  a {
    text-decoration: none;
  }
  .gatsby-image-wrapper {
    height: 500px;
  }
  h2 {
   font-size:0px;
  }
  .description {
   font-size:0px;
  }
  :hover{
    h2{    text-align: center;
      font-size: 3rem;
      margin-bottom: -2rem;
      position: relative;
      z-index: 2;
      background: #fff;
      padding: 10px;}

      .description {
        background: var(--white);
        padding: 1rem;
        margin: 2rem;
        margin-top: -6rem;
        z-index: 2;
        position: relative;
        text-align: center;
        color: var(--black);
        text-align: center;
        webkit-animation-duration: 2s;
    animation-duration: 3s;
        font-size:1.2em;
        transform: translate(8px, -110px);
      }
  }
`;
const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  height: 600px;

  @media (min-width: 1500px) and (max-width: 2560px) {
    padding-bottom: 10%;
  }
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    height: 100%;
    iframe{width:100%;}
  }
  
`;
const Story = styled.div`
  padding: 5%;
  @media (min-width: 1500px) and (max-width: 2560px) {
    margin-left: 30%;
  }
  h1 {
    font-size: 4em;
    padding-bottom: 40px;
  }
`;

export default function AboutPage({ data }) {
  const staff = data.staff.nodes;

  return (
    <>
      <SEO>
        <title>Bio - Blog</title>
      </SEO>
      <InfoGrid>
        <div>
        <iframe width="674" height="379" src="https://www.youtube.com/embed/VCSpu_I0q_c" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
        </div>
        <Story>
          <h1>Mi Historia</h1>
          <p>
            Naci en Caracas 🇻🇪 en 1960 y fui criado junto con 10 hermanos con los cuales compartía todo, si… hasta la bicicleta. Pinto desde los 7 años de edad, y mi tío quien me decía “no dejes de pintar que tú vas a vivir de eso”, no estaba muy lejos de la realidad. Caraqueño residenciado en Valencia desde hace 54 años conserva en mi memoria un sinfín de anécdotas que alimentan mis trabajos y lo hacen inmensamente feliz, “la estoy pasando muy bien”
          </p>
        </Story>
      </InfoGrid><StaffGrid>
        {staff.map((person) => (
          <StaffStyles>
            <h2>
              <span className="mark">{person.name}</span>
            </h2>
            <Img fluid={person.image.asset.fluid} />
            <p className="description">{person.description}</p>
            <Link to="https://www.instagram.com/jhonylunart/">
            </Link>
          </StaffStyles>
        ))}
      </StaffGrid>
      
    </>
  );
}

export const query = graphql`
  query {
    staff: allSanityPerson {
      totalCount
      nodes {
        name
        id
        slug {
          current
        }
        description
        image {
          asset {
            fluid(maxWidth: 1050) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
