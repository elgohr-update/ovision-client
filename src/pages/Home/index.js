import React, { useEffect, useState } from 'react';
import api from '../../api';
import { useLoader } from '../../hooks/useLoader';
import './styles.scss';

export const Home = () => {
  const [image, setImage] = useState(null);
  const loader = useLoader();

  useEffect(() => {
    loader.show();
    api
      .getRandomFox()
      .then(res => {
        setImage(res.data.image);
      })
      .catch(err => console.log(err))
      .finally(() => loader.hide());
    // eslint-disable-next-line
  }, []);

  return <div className="Home">{image && <img src={image} alt="foxy" />}</div>;
};
