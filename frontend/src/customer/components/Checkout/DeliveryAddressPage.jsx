import React from "react";
import AddressCard from "./AddressCard";
import AddressForm from "./AddressForm";

function DeliveryAddressPage() {
  return (
    <div>
      
      <div className="grid grid-cols-12 gap-4 pt-5">
        {/* addresses box */}
        <div className="lg:col-span-4 text-xl border col-span-12  rounded-e-md h-[30rem] overflow-y-scroll ">
          <div className="">
            <div className="cursor-pointer h-[24rem]">
              <AddressCard />
            </div>
            <div className="flex justify-center items-center">
              <button className="cursor-pointer mx-4 py-2 w-full bg-slate-800 hover:bg-slate-900 text-lg font-semibold text-white rounded-lg">
                {" "}
                Deliver Here
              </button>
            </div>
          </div>
        </div>

        {/* new address form */}
        <div className="lg:col-span-8 border col-span-12">
          {/* form grid */}

          <div>
            <form>
            <div className="grid grid-cols-12 gap-4">
            
            <div className="col-span-12">
             <AddressForm />
             </div>

            </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliveryAddressPage;
