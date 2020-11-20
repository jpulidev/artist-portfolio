import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { SiGmail as Mail, SiWhatsapp as Whatsapp } from 'react-icons/si';

const NavStyles = styled.nav`
  margin-bottom: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 1.5%;
  ul {
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 130px 130px 130px 1fr;
    list-style: none;
    text-align: left;
    align-items: center;
    height: 100px;
    grid-gap: 2em;
  }
  li {
    order: 1;
  }
  a {
    font-size: 1.3rem;
    color: var(--black);
    text-decoration: none;
    padding: 0px 10px;

    &:hover {
      color: var(--white);
      background: var(--black);
    }
  }
  @media screen and (max-width: 1000px) {
    ul {
      grid-template-columns: 1fr;
    gap:8px;
    text-align: center;
    }
  }
`;
const FloatSocials = styled.div`
position: relative;
display: grid;
grid-template-columns: 130px 100px 100px;
float:right;
right: 0px;
font-size: 2em;
line-height: 1;
margin-top: 0px;
z-index: 1;
  a {
    font-size: 15px;
  }
  @media screen and (max-width: 1000px) {
    font-size: 1.4em;
    right: 49px;
    text-align: center;
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link to="/">Jhony Luna S.</Link>
        </li>
        <li>
          <Link to="/about">Bio - Blog</Link>
        </li>
        <li>
          <Link to="/projects">Obras</Link>
        </li>
        <li>
          <FloatSocials>
            <div>
              <Link to="https://www.instagram.com/jhonylunart/">
                @Jhonylunart
              </Link>
            </div>
            <div>
              <Link to="https://api.whatsapp.com/send?phone=584244047212&text=I%20want%20to%20work%20with%20you!">
                <Whatsapp />
              </Link>
            </div>
            <div>
              <Link href="mailto:josecpulidoo@gmail.com">
                <Mail />
              </Link>
            </div>
          </FloatSocials>
        </li>
      </ul>
    </NavStyles>
  );
}
