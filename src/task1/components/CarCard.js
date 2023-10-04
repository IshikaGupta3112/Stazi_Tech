import people from "../assets/icons/people.svg";
import wheel from "../assets/icons/wheel.svg";
import fuel from "../assets/icons/fuel.svg";
import meter from "../assets/icons/meter.svg";
import heart from "../assets/icons/heart.svg";

function CarCard(props) {
  return (
    <div class="bg-blue-grey shadow-md border border-gray-100 rounded-xl py-1 w-4xl px-1 box-border flex-col">
      <div class="box-border mb-4" id={props.id}>
        <img src={props.img} class="object-cover rounded-xl"></img>
      </div>
      <div class="mx-4 my-3">
        <div class="my-1 flex justify-between">
          <p class="text-2xl">{props.name}</p>
          <span class=" rounded-xl border px-3 border-dashed border-basic-blue flex items-center">
            {props.year}
          </span>
        </div>
        <div class="flex my-4 justify-between">
          <div class="flex items-center">
            <img src={people}></img>
            <p class="font-semibold text-xs text-gray-500 mx-2">
              {props.people} People
            </p>
          </div>
          <div class="flex items-center mr-4xl">
            <img src={fuel}></img>
            <p class="font-semibold text-xs text-gray-500 mx-2">{props.fuel}</p>
          </div>
        </div>
        <div class="flex justify-between mt-4 ">
          <div class="flex items-center">
            <img src={meter}></img>
            <p class="font-semibold text-xs text-gray-500 mx-2">
              {props.mileage}km/1-litre
            </p>
          </div>
          <div class="flex items-center mr-20">
            <img src={wheel}></img>
            <p class="font-semibold text-xs text-gray-500 mx-2">
              {props.drive}
            </p>
          </div>
        </div>
        <hr class="border-t border-gray-300 my-4"></hr>
        <div class="flex justify-between">
          <p class="text-sm ">
            <span class="text-lg">{props.price} </span>/ month
          </p>
          <button class=" bg-darker-blue text-darker-blue font-semibold px-3 py-2 text-sm ml-20 text-center rounded-xl">
            <img src={heart}></img>
          </button>
          <button class="bg-basic-blue text-white text-xs px-4 py-2 rounded-xl">
            Rent Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
