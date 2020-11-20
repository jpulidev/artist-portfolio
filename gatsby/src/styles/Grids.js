import styled from 'styled-components';

export const HomePageGrid = styled.div`
  display: grid;
  gap: 2rem;
  --columns: 1;
  grid-template-columns: repeat(var(--columns), minmax(auto, 1fr));
  @media (max-width: 800px) {
    --columns: 1;
  }
`;

export const ItemsGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr;
  max-width: 1100px;
  margin: 0 auto;
  padding-bottom: 4%;
  div:nth-of-type(1){{grid-column: span 3;}}
  div:nth-of-type(2){{grid-column: span 2;
    display: grid;
    justify-content: right;}}
    div:nth-of-type(4){{grid-column: span 3;}}


`;

// Single Grid Item (for home page)
export const ItemStyles = styled.div`
  text-align: center;
  position: relative;
  
  img {
    height: auto;
    font-size: 0;
  }
  p {
    top: 0;
    transform: rotate(-2deg) translateY(-10px);
    position: absolute;
    width: 100%;
    left: 0;
    margin: 0;
    font-size: 2rem;
    font-size: clamp(12px, 5vw, 20px);
  }
  .mark {
    display: inline;
  }
  @keyframes shine {
    from {
      background-position: 200%;
    }
    to {
      background-position: -40px;
    }
  }
  img.loading {
    --shine: white;
    --background: var(--grey);
    background-image: linear-gradient(
      90deg,
      var(--background) 0px,
      var(--shine) 40px,
      var(--background) 80px
    );
    background-size: 500px;
    animation: shine 1s infinite linear;
  }
`;
