import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missions/missionSlice';

const Mission = ({
  id, name, description, reserved,
}) => {
  const dispatch = useDispatch();
  return (
    <tr>
      <th className="heading" scope="row">{name}</th>
      <td className="heading col-lg-7">{description}</td>
      <td className="btns">
        {reserved ? (
          <span className="member-txt">Active Member</span>
        ) : (<span className="notamember-txt">NOT A MEMBER</span>
        )}
      </td>
      <td className="btns">
        {reserved ? (
          <button
            type="button"
            className="btns-red"
            onClick={() => dispatch(leaveMission(id))}
          >
            Leave Mission
          </button>
        ) : (
          <button
            type="button"
            className="btns-i"
            onClick={() => dispatch(joinMission(id))}
          >
            Join Mission
          </button>
        )}
      </td>
    </tr>
  );
};

Mission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Mission;
