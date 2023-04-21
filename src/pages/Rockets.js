import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRocketsData } from '../redux/rockets/rocketSlice';
import Rocket from '../components/Rocket';

const Rockets = () => {
  const { rockets, hasError, isFetched } = useSelector(
    (store) => store.rockets,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(getRocketsData());
    }
  }, [dispatch, isFetched, rockets.length]);

  if (hasError) return <h2>An error has occurred</h2>;
  if (rockets.length === 0) return <h2>No Rockets exist</h2>;

  return rockets.map((rocket) => <Rocket key={rocket.id} rocket={rocket} />);
};

export default Rockets;
