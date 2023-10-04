import { FETCH_CITY, FETCH_HOTEL } from "./action.js";

const initialState = {
  hotels: [],
  city: [],
  loading: true,
  error: null,
};

const hotelReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HOTEL:
      console.log(action.payload.hotels);
      return {
        ...state,
        loading: false,
        hotels: action.payload.hotels,
      };
    case FETCH_CITY:
      return {
        ...state,
        loading: false,
        city: action.payload,
      };
    default:
      return state;
  }
};

export default hotelReducer;
