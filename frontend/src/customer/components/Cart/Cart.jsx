import React from "react";

function Cart() {
  return (
    <div>
      <div className="   px-20">
        <h1 className="mb-10 text-left text-2xl font-bold">Cart Items</h1>
        
            <div className="grid grid-cols-12 gap-7  ">
          <div className="rounded-lg lg:col-span-7 sm:col-span-10  ">
            <div className="justify-between  mb-6 rounded-lg bg-white p-6 shadow-md border sm:flex sm:justify-start">
              <img
                src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="product-image"
                className="w-full rounded-lg sm:w-40"
              />
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Nike Air Max 2019
                  </h2>
                  <p className="mt-1 text-xs font-semibold text-gray-400">
                    Size: L
                  </p>
                  <p className="text-xs font-semibold text-gray-400">
                    Color: Blue
                  </p>
                  <p className="text-xs font-semibold text-gray-400">
                    Seller: Ahmad inc.
                  </p>
                  <div className="flex items-center space-x-2 pt-1">
                    <p className="text-sm font-semibold line-through text-gray-400">
                      $2890
                    </p>{" "}
                    <p className="text-sm font-semibold">$894</p>{" "}
                    <p className="text-sm text-green-800 font-semibold">
                      70% off
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                  <div className="flex items-center space-x-2 justify-end">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                  <div className="flex items-center border-gray-100">
                    <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                      {" "}
                      -{" "}
                    </span>
                    <input
                      className="h-8 w-8 border bg-white text-center text-xs outline-none"
                      type="number"
                      value="2"
                      min="1"
                    />
                    <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                      {" "}
                      +{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="justify-between  mb-6 rounded-lg bg-white p-6 shadow-md border sm:flex sm:justify-start">
              <img
                src="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80"
                alt="product-image"
                className="w-full rounded-lg sm:w-40"
              />
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Nike Air Max 2019
                  </h2>
                  <p className="mt-1 text-xs font-semibold text-gray-400">
                    Size: L
                  </p>
                  <p className="text-xs font-semibold text-gray-400">
                    Color: Blue
                  </p>
                  <p className="text-xs font-semibold text-gray-400">
                    Seller: Ahmad inc.
                  </p>
                  <div className="flex items-center space-x-2 pt-1">
                    <p className="text-sm font-semibold line-through text-gray-400">
                      $2890
                    </p>{" "}
                    <p className="text-sm font-semibold">$894</p>{" "}
                    <p className="text-sm text-green-800 font-semibold">
                      70% off
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                  <div className="flex items-center space-x-2 justify-end">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                  <div className="flex items-center border-gray-100">
                    <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                      {" "}
                      -{" "}
                    </span>
                    <input
                      className="h-8 w-8 border bg-white text-center text-xs outline-none"
                      type="number"
                      value="2"
                      min="1"
                    />
                    <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                      {" "}
                      +{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Sub total  */}
          <div className="mt-6 h-fit lg:col-span-5 sm:col-span-10 rounded-lg border bg-white p-6 shadow-md md:mt-0 ">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Subtotal <span>(2 Items)</span></p>
              <p className="text-gray-700">$329.99</p>
            </div>
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Discount </p>
              <p className="text-green-600 font-semibold">-$129.99</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Delivery Charges</p>
              <p className="text-green-600 font-semibold">Free</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between ">
                <div className="flex items-baseline">
              <p className="text-lg font-bold">Total </p>
              <p className="test-sm  text-gray-400 px-1">(total payable amount)</p>
              </div>
              <div className="">
                <p className=" text-lg text-right  font-bold text-green-600">$200 USD</p>
                <p className="text-sm text-gray-400">Including All Texes</p>
              </div>
            </div>
            <button className="mt-1 w-full rounded-md bg-slate-800 py-1.5 font-medium text-white hover:bg-slate-900">
              Check out
            </button>
          </div>
          </div>
        </div>
      </div>
    
  );
}

export default Cart;
