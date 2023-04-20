import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_ROCKETS = 'Rockets/Rockets/GET_ROCKETS';
const url = 'https://api.spacexdata.com/v3/rockets';

const getData = async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return error;
  }
};

const initialState = {
  rockets: [],
};

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_ROCKETS}\fulfilled`:
      return {
        ...state,
        rockets: action.payload,
      };
    default:
      return state;
  }
};

export const getRockets = createAsyncThunk(GET_ROCKETS, async () => {
  const data = await getData();
  const rockets = [];

  data.forEach((data) => {
    rockets.push(data);
  });
  return rockets;
});

export default rocketReducer;
