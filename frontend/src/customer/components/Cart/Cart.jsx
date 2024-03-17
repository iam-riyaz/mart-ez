import React from "react";
import CartItem from "./CartItem";

function Cart() {
  return (
    <div>
      <div className="   px-5 md:px-20">
        <h1 className="mb-10 text-left text-2xl font-bold">Cart Items</h1>
        
            <div className="grid grid-cols-12 gap-7  ">
          <div className="rounded-lg lg:col-span-7 col-span-12  ">
            <CartItem/>
            <CartItem/>
          </div>
          {/* Sub total  */}
          <div className="mt-6 h-fit lg:col-span-5 col-span-12 rounded-lg border bg-white p-6 shadow-md md:mt-0 ">
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
