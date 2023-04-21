import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { bookRocket, cancelBooking } from '../redux/rockets/rocketSlice';
import style from './Rocket.module.css';

const Rocket = ({ rocket }) => {
  const dispatch = useDispatch();
  return (
    <div className={style.rocketContainer}>
      <div className={style.image}>
        <img src={rocket.image} alt="rocket" />
      </div>
      <div className={style.content}>
        {' '}
        <h3 className={style.rocketName}>{rocket.name}</h3>
        <p className={style.rocketDescription}>
          {rocket.reserved && (
            <span className={style.badges}>Reserved</span>
          )}
          {rocket.description}
        </p>
        {rocket.reserved && (
          <button
            type="button"
            onClick={() => {
              dispatch(cancelBooking(rocket.id));
            }}
            className={style.cancel}
          >
            Cancel Reservation
          </button>
        )}
        {!rocket.reserved && (
          <button
            type="button"
            onClick={() => {
              dispatch(bookRocket(rocket.id));
            }}
            className={style.reserve}
          >
            Reserve Rocket
          </button>
        )}

      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default Rocket;
