import { useEffect, useState } from 'react';
import { api, endpoints, universalParams } from 'api';

const LandingPage = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    api
      .get(endpoints.allCountries, universalParams)
      .then(({ data }) => {
        console.log(data);
        setCountries(data);
      })
      //   .then((res) => {
      //     console.log(res);
      //   })
      //   .then((res) => {
      //     console.log('finished');
      //   })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      {countries.map(({ name }) => {
        return <div>{name.common}</div>;
      })}
    </div>
  );
};

export default LandingPage;
