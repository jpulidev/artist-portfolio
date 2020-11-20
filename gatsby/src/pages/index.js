import React from 'react';
import Hero from '../components/HeroTitle';
import ItemGrid from '../components/ItemGrid';
import LoadingGrid from '../components/LoadingGrid';
import { HomePageGrid } from '../styles/Grids';
import useLatestData from '../utils/useLatestData';

function CurrentlyAbout({ hotAbout }) {
  return (
    <div>
      <h2 className="left">
        <span className="mark tilt left" data-aos="fade-up"
        data-aos-anchor-placement="bottom-center" >Abuelo Runner</span>
      </h2>
      <p data-aos="fade-up"
      data-aos-anchor-placement="bottom-center" >Aca encontraras las ultimas noticias</p>
      {!hotAbout && <LoadingGrid count={4} />}
      {hotAbout && !hotAbout?.length && <p>No one is working right now!</p>}
      {hotAbout?.length && <ItemGrid items={hotAbout} />}
    </div>
  );
}

function LatestProjects({ hotProjects }) {
  return (
    <div>
     <h2 className="center">
        <span className="mark tilt" data-aos="fade-down-right">Obras Destacadas</span>
      </h2>
      <p data-aos="fade-up"
      data-aos-anchor-placement="bottom-center">Aca podras ver mis obras recientes</p>
      {}
      {hotProjects && !hotProjects?.length && <p>Nothin' in the Case</p>}
      {hotProjects?.length && <ItemGrid items={hotProjects} />}
    </div>
  );
}

export default function HomePage() {
  const { hotAbout, hotProjects } = useLatestData();

  return (
    <>
      <div>
        <Hero />
        <HomePageGrid className="center">
          <LatestProjects hotProjects={hotProjects} />
          <CurrentlyAbout hotAbout={hotAbout} />
        </HomePageGrid>
      </div>
    </>
  );
}
