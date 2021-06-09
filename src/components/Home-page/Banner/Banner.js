import React from "react";
import bannerLeftImg from "../../../images/pizza-2.png";

const Banner = () => {
  return (
    <div className="bg-home-banner bg-cover h-screen">
      <div className="max-w-7xl mx-auto text-white h-full px-5 md:px-3 lg:px-0">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 items-center h-full">
          <div className="space-y-5 mt-5 md:mt-0">
            <p>IF MUSIC BE THE FOOD OF LOVE PLAY ON</p>
            <h1 className="font-bold text-4xl md:text-7xl">ITALY</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
              delectus odio repellat doloribus tenetur eum!
            </p>
            <button className="uppercase font-medium text-sm border border-white hover:text-gray-800 hover:bg-white transition duration-300 px-3 py-3">
              View the menu
            </button>
          </div>
          <div>
            <img className="md:h-auto h-60" src={bannerLeftImg} alt="Banner left" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
