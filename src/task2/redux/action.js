import hotel from "../json/hotel";

export const FETCH_HOTEL = "FETCH_HOTEL";
export const FETCH_CITY = "FETCH_CITY";

export const fetchHotel = (city) => ({
  type: FETCH_HOTEL,
  payload: hotel.find((obj) => obj.city == city),
});
export const fetchCity = () => ({
  type: FETCH_CITY,
  payload: hotel,
});
