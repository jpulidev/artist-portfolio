import styled from 'styled-components';

export const TwoGridSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(550px, 1fr));
  justify-content: center;
  align-items: center;
  height: 400px;
  max-width: 1200px;
  margin: 0 auto;
  padding-top:8%;
  img {
    position: relative;
    top: -119px;
    left: 13px;
  }
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    height: 100%;
    img{
      position: relative;
      top: 0px;
      left: 0px;

    }

  }
`;
