import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Rocket = () => {
  const { rockets } = useSelector((state) => state.rockets);
  const [reserved, setReserved] = useState([]);
  useEffect(() => {
    setReserved(() => rockets.filter((rocket) => rocket.reserved === true));
  }, [rockets]);
  return (
    <ul>
      { reserved.length === 0
        ? (<span> No Reserved Rocket!</span>)
        : (
          reserved.map((rocket) => (
            <li key={rocket.id}>
              <span>
                {rocket.name}
              </span>
            </li>
          ))
        )}
    </ul>
  );
};

export default Rocket;
