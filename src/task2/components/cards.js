import location from "../assets/icons/loaction.svg";
import bath from "../assets/icons/bath.svg";
import bed from "../assets/icons/bed.svg";
import room from "../assets/icons/room.svg";
import area from "../assets/icons/area.svg";
import heart from "../assets/icons/heart.svg";
import { Link } from "react-router-dom";

function Cards(props) {
  return (
    <div class="bg-white w-96 px-1 box-border rounded-xl flex-col">
      <div class="box-border mb-12" id={props.id}>
        <span class="relative rounded-3xl bg-white text-dark-blue px-4 py-2 font-semibold text-sm top-3 left-3">
          {props.For}
        </span>
        <button class="relative bg-white text-dark-blue font-semibold p-2 text-sm left-60 top-4 text-center rounded-full">
          <img src={heart}></img>
        </button>
        <img src={props.img} class="object-cover rounded-xl -my-8"></img>
      </div>
      <div class="mx-4 my-3">
        <div class="flex items-center">
          <img src={location}></img>
          <p class="text-xs font-semibold text-gray-500">{props.loc}</p>
        </div>
        <div class="my-2">
          <p class="font-semibold text-base">{props.name}</p>
        </div>
        <div class="flex gap-8 mx-3 my-4  border-dotted pb-3 border-b-2 border-gray-100">
          <div class="flex-col items-start border-dotted pr-2 border-r-2 border-gray-100">
            <img src={room}></img>
            <p class="font-semibold text-xs text-gray-500">
              {props.roomNo} Room
            </p>
          </div>
          <div class="flex-col items-start border-dotted pr-2 border-r-2 border-gray-100">
            <img src={bed}></img>
            <p class="font-semibold text-xs text-gray-500">{props.bedNo} Bed</p>
          </div>
          <div class="flex-col items-start border-dotted pr-2 border-r-2 border-gray-100">
            <img src={bath}></img>
            <p class="font-semibold text-xs text-gray-500">
              {props.bathNo} Bath
            </p>
          </div>
          <div class="flex-col items-start">
            <img src={area}></img>
            <p class="font-semibold text-xs text-gray-500">{props.size} sft</p>
          </div>
        </div>
        <div class="flex justify-between">
          <p class="text-sm font-medium">
            <span class="text-base font-semibold text-dark-blue">
              {props.price}{" "}
            </span>
            /month
          </p>
          <Link
            to={`/property/${props.id}`}
            className="px-2 py-2 border-2 border-dark-blue rounded-3xl text-dark-blue font-bold text-sm mr-2 mb-2"
            id='readMore'
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cards;
