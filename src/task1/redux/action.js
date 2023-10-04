import cars from "../json/cars";

export const FETCH_CARS = "FETCH_CARS";

export const fetchCars = () => ({
  type: FETCH_CARS,
  payload: cars,
});
