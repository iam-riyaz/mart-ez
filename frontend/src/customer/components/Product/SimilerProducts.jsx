import React from "react";
import { mens_kurta } from "../../../data/mens_kurta";
import { HomeSectionCart } from "../HomeSectionCard/HomeSectionCard";

function SimilerProducts() {
  return (
    <div>
      <h1 className="text-xl font-bold">Similer Products</h1>
      <div className="flex flex-wrap space-x-5">
        {mens_kurta.slice(0,10).map((data) => {
          return <HomeSectionCart product={data} />;
        })}
      </div>
    </div>
  );
}

export default SimilerProducts;
