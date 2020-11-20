import { useState, useEffect } from 'react';

const gql = String.raw;

const deets = `
    name
    _id
    image {
      asset {
        url
        metadata {
          lqip
        }
      }
    }
`;

export default function useLatestData() {
  // hot slices
  const [hotAbout, setAbout] = useState();
  // slicemasters
  const [hotProjects, setProjects] = useState();
  // Use a side effect to fetcht he data from the graphql endpoint
  useEffect(function () {
    // when the component loads, fetch the data
    fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: gql`
          query {
            StoreSettings(id: "downtown") {
              name
              hotAbout {
                ${deets}
              }
              hotProjects {
                ${deets}
              }
            }
          }
        `,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        // TODO: checl for errors
        // set the data to state
        setAbout(res.data.StoreSettings.hotAbout);
        setProjects(res.data.StoreSettings.hotProjects);
      })
      .catch((err) => {
        console.log('SHOOOOOT');
        console.log(err);
      });
  }, []);
  return {
    hotAbout,
    hotProjects,
  };
}
