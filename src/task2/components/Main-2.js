import Cards from "./cards";
import Header from "./header";
import { useState } from "react";
import hourglass from "../assets/icons/hourglass.svg";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCity, fetchHotel } from "../redux/action";

function Main() {
  const dispatch = useDispatch();
  const hotels = useSelector((state) => state.hotelReducer.hotels);
  const city = useSelector((state) => state.hotelReducer.city);
  const [activeButton, setActiveButton] = useState("New York");

  const handleButtonClick = (buttonCity) => {
    setActiveButton(buttonCity);
  };

  const [n, setN] = useState(false);
  const [limit, setLimit] = useState(6);
  const [cityName, setCityName] = useState("New York");

  dispatch(fetchCity());
  useEffect(() => {
    dispatch(fetchHotel(cityName));
  }, [n]);
  useEffect(() => {
    if (limit >= hotels.length) {
      document.getElementById("showLessBtn").style.display = "block";
      document.getElementById("showMoreBtn").style.display = "none";
    }
    if (limit == 6) {
      document.getElementById("showLessBtn").style.display = "none";
      document.getElementById("showMoreBtn").style.display = "flex";
    }
  }, [limit]);

  function hotelList(hotel) {
    return (
      <Cards
        id={hotel.id}
        loc={hotel.loc}
        roomNo={hotel.roomNo}
        bedNo={hotel.bedNo}
        bathNo={hotel.bathNo}
        size={hotel.size}
        price={hotel.price}
        name={hotel.name}
        For={hotel.For}
      />
    );
  }
  function tabList(city) {
    return (
      <div class="mt-12">
        <button
          className={activeButton === city.city ? "active" : "normal"}
          onClick={() => {
            handleButtonClick(city.city);
            setN(!n);
            setCityName(city.city);
          }}
          id={city.city}
        >
          {city.city}
        </button>
      </div>
    );
  }
  function showMore() {
    if (limit < hotels.length) {
      setLimit(limit + 3);
    }
  }
  function showLess() {
    if (limit > 6) {
      setLimit(limit - 3);
    }
  }
  const heading = "Featured Listed Property";
  const para =
    "Real estate can be brought, sold, leased, or rented, and can be a valuable investment opportunity. The value of real estate can be...";
  return (
    <div class="bg-light-blue">
      <Header heading={heading} para={para} />
      <div class="flex flex-wrap mx-20 mb-8">
        {city.map((city) => tabList(city))}
      </div>
      <div class="flex flex-wrap gap-10 mx-20 my-8">
        {hotels.slice(0, limit).map((hotel) => hotelList(hotel))}
      </div>
      <div class="w-1/6 m-auto pb-10">
        <button
          class="bg-dark-blue px-6 py-2 flex justify-center items-center ml-4 text-white font-semibold rounded-3xl"
          id="showMoreBtn"
          onClick={showMore}
        >
          <img src={hourglass} class="mr-1"></img>Show More
        </button>
      </div>
      <div class="w-1/6 m-auto pb-10">
        <button
          class="bg-dark-blue px-6 py-2 ml-8 text-white font-semibold rounded-3xl hidden"
          id="showLessBtn"
          onClick={showLess}
        >
          Show Less
        </button>
      </div>
    </div>
  );
}

export default Main;
