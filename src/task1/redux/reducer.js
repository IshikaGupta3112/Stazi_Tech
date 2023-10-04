import { FETCH_CARS } from "./action.js";

const initialState = {
  cars: [],
  loading: true,
  error: null,
};

const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARS:
      return {
        ...state,
        loading: false,
        cars: action.payload,
      };
    default:
      return state;
  }
};

export default carsReducer;
