import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets } from '../redux/rockets/rocketSlice';
import style from '../components/Rocket.module.css';

const Rocket = () => {
  const { rockets } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  return (
    rockets.map((rocket) => (
      <section key={rocket.id} className={style.rocketContainer}>
        <div className={style.image}>
          <img src={rocket.flickr_images[0]} alt="rocket" />
        </div>
        <div className={style.content}>
          {' '}
          <h2 className={style.rocketName}>{rocket.rocket_name}</h2>
          <p className={style.rocketDescription}>{rocket.description}</p>
          <button type="button" className={style.reserve}>Reserve Rocket</button>
        </div>
      </section>
    ))
  );
};

export default Rocket;
