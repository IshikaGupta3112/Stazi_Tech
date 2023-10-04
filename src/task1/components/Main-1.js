import { useDispatch, useSelector } from "react-redux";
import CarCard from "./CarCard";
import { useEffect } from "react";
import { fetchCars } from "../redux/action";
import searchIcon from "../assets/icons/search.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import notFound from '../assets/img/notFound.svg'

function Main() {
  const cars = useSelector((s) => s.carsReducer.cars);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [n, setN] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredCars, setFilteredCars] = useState(cars);
  const [page , setPage] = useState(1);
  const [uplimit , setUpLimit] = useState(0);
  const [lowlimit , setLowLimit] = useState(6);
  useEffect(() => {
    console.log(search);
    setFilteredCars(
      cars.filter(
        (car) =>
          car.name &&
          car.name.toLowerCase().includes(search ? search.toLowerCase() : null)
      )
    );
    if (search == "") {
      setFilteredCars(cars);
    }
    console.log(filteredCars);
  }, [search]);
  const totalPage =10;
  function searchFunc(e) {
    setSearch(e.target.value);
    setPage(1);
    setN(!n);
  }
  useEffect(() => {
    dispatch(fetchCars());
  }, []);
  useEffect(() => {
setLowLimit((page-1)*6);
setUpLimit((page)*6);
console.log(lowlimit,uplimit);
if(page==1){
document.getElementById('backBtn').style.display='none';
document.getElementById('firstBtn').style.display='none';
document.getElementById('forwardBtn').style.display='block'; 
document.getElementById('lastBtn').style.display='block'; 
}
else if(page==10){
    document.getElementById('forwardBtn').style.display='none';
    document.getElementById('lastBtn').style.display='none';
    document.getElementById('backBtn').style.display='block'; 
    document.getElementById('firstBtn').style.display='block'; 
}
else{
    document.getElementById('forwardBtn').style.display='block'; 
    document.getElementById('lastBtn').style.display='block'; 
    document.getElementById('backBtn').style.display='block'; 
    document.getElementById('firstBtn').style.display='block'; 
}
navigate(`/page/${page}`);
  }, [page]);

  function carList(car) {
    return (
      <CarCard
        id={car.id}
        name={car.name}
        price={car.price}
        year={car.year}
        people={car.people}
        drive={car.drive}
        mileage={car.mileage}
        fuel={car.fuel}
      />
    );
  }

  function backFunc(){
if(page>1){
    setPage(page-1);
}
  }
  function forwardFunc(){
    if(page<10){
        setPage(page+1);
    }
  }

  function firstFunc(){
        setPage(1);
  }
  function lastFunc(){
    setPage(10);
}
  function generatePageNumbers() {
    const pages = [];
    const showPages = 5;
    let start = Math.max(1, page - 2);
    let end = Math.min(start + showPages - 1, totalPage);

    if (end - start < showPages - 1) {
      start = Math.max(1, end - showPages + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(
        <Link
          to={`/page/${i}`}
          className={`bg-white py-1 px-3 text-xs rounded-lg shadow-md ${page === i ? 'bg-blue-500' : ''}`}
          key={i}
          onClick={() => setPage(i)}
        >
          {i}
        </Link>
      );
    }
    return pages;
  }

  return (
    <div class="bg-blue-grey py-4 px-10 min-h-screen">
      <div class="bg-blue-grey flex py-4 px-4 shadow-md border border-gray-100 rounded-2xl">
        <input
          type="text"
          placeholder="Search..."
          class="rounded-2xl pl-3 py-2 w-96"
          value={search}
          onChange={searchFunc}
        ></input>
        <img src={searchIcon} class="relative -left-8"></img>
      </div>
      <div class="my-8 flex flex-wrap gap-8">
        {filteredCars.slice(lowlimit,uplimit).map((c) => carList(c))}
      </div>
      {filteredCars.length?<div class="bg-blue-grey flex py-4 px-4 shadow-md border border-gray-100 rounded-xl items-center justify-between">
<p class="text-xs font-medium text-gray-600">{filteredCars.length<60?filteredCars.length:uplimit} of {cars.length}</p>
{filteredCars.length==60?<div class='flex gap-2'>
 <button class="bg-white py-1 px-2 text-xs rounded-lg shadow-md" id='firstBtn' onClick={firstFunc}>&lt;&lt;</button> 
 <button class="bg-white py-1 px-2 text-xs rounded-lg shadow-md" id='backBtn' onClick={backFunc}>&larr;</button> 
 {generatePageNumbers()}
<button class="bg-white py-1 px-2 text-xs rounded-lg shadow-md" id='forwardBtn' onClick={forwardFunc}>&rarr;</button>
<button class="bg-white py-1 px-2 text-xs rounded-lg shadow-md" id='lastBtn' onClick={lastFunc}>&gt;&gt;</button> 
        </div>:null}
      </div>:<div className="flex justify-center items-center my-20 h-70vh"><img src={notFound} class='w-96 mt-10'></img></div>}
    </div>
  );
}

export default Main;
