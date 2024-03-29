import React from 'react'

function CartItem() {
  return (
    <div>
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
    </div>
  )
}

export default CartItem