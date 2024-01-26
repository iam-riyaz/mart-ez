import React from "react";

const ProductCard = () => {
  return (
    <div>
      <div class=" cursor-pointer relative m-2 flex min-w-min max-w-xs flex-col overflow-hidden rounded-lg border  border-gray-300 bg-white-100 shadow-2xl transition ease-in-out delay-150 hover:bg-gray-50 hover:-translate-y-1  hover:scale-105 duration-500 hover:border hover:border-gray-500">
        <div
          class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl justify-center shadow-md bg-white-100 "
          
        >
          <img
            className="object-contain  "
            src="https://rukminim1.flixcart.com/image/612/612/kt0enww0/dress/2/d/p/xxl-1091-sheetal-associates-original-imag6g4n7qhwesad.jpeg?q=70"
            alt="product image"
          />
          <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
            39% OFF
          </span>
        </div>
        <div class="mt-4 px-5 pb-5 hover:-translate-y-2 duration-700 ">
          <a href="#">
            <h5 className="text-md font-semibold text-gray-400">Brand name</h5>
            <h5 class="text-lg font-semibold tracking-tight text-slate-900">
              Nike Air MX Super 2500 - Red
            </h5>
          </a>
          <div class="mt-2 mb-5 flex items-center justify-between">
            <p>
              <span class="text-2xl font-bold text-slate-900">
                ₹<span>499</span>
              </span>
              <span class="text-sm text-slate-900 line-through">
                ₹<span>699</span>
              </span>
            </p>
            
          </div>
          <a
            href="#"
            class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mr-2 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
