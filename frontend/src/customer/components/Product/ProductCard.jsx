import React from "react";

const ProductCard = ({data}) => {
  return (
    <div>
      <div class=" cursor-pointer relative m-2 my-3 flex w-52 max-w-xs flex-col overflow-hidden rounded-lg border  border-gray-300 bg-white-100 shadow-2xl transition ease-out delay-150 hover:bg-gray-50 hover:translate-y-1  hover:scale-105 duration-100 hover:border hover:border-gray-500">
        <div
          class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl justify-center shadow-md bg-white-100 "
          
        >
          <img
            className="object-contain  "
            src={data.imageUrl}
            alt="product image"
          />
          <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
            {data.discountPersent}% OFF
          </span>
        </div>
        <div class="mt-4 px-5 pb-5  ">
          <a href="#">
            <h5 className="text-sm font-semibold text-gray-400">{data.brand}</h5>
            <div className="h-14 w-full">
            <h5 class="text-md font-semibold tracking-tight text-slate-900 leading-tight">
              {data.title}
            </h5>
            </div>
          </a>
          <div class="mt-2 mb-5 flex items-center justify-between">
            <p>
              <span class="text-2xl font-bold text-slate-900">
                ₹<span>{data.discountedPrice}</span>
              </span>
              <span class="text-sm text-slate-900 line-through">
                ₹<span>{data.price}</span>
              </span>
            </p>
            
          </div>
          <a
            href="#"
            class=" hover:scale-105 duration-100  flex items-center justify-center rounded-md bg-slate-800 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-slate-900 focus:outline-none "
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
