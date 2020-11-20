import { Link } from 'gatsby';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ItemsGrid, ItemStyles } from '../styles/Grids';
import Aos from 'aos';
import "aos/dist/aos.css";


const HoverText = styled.p`
position: absolute;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    display: grid;
    color:transparent;
    :hover{font-size:2em;color:var(--black);
    span {background:var(--white);
    padding:3% 10px;}
    }
`;

export default function ItemGrid({ items }) {
  useEffect(()=> {
    Aos.init({duration:2000});
  }, []);
  return (
    <ItemsGrid>
      {items.map((item) => (
        <ItemStyles key={item._id} data-aos="fade-up">
          <Link to="/projects"> <HoverText>
           <span data-aos="fade-down-right"> {item.name}</span>
          </HoverText>
          <img
            width="500"
            height="400"
            src={`${item.image.asset.url}?w=500&h=400&fit=crop`}
            alt={item.name}
            style={{
              background: `url(${item.image.asset.metadata.lqip})`,
              backgroundSize: 'cover',
            }}
          /></Link>
        </ItemStyles>
      ))}
    </ItemsGrid>
  );
}
