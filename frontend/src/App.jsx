import { useState } from "react";


import { Navbar } from "./customer/components/Navbar/Navbar.jsx";
import { HomePage } from "./customer/pages/homePage";
import TestCarousel from "./customer/components/HomeSectionCarousel/HomeSectionCarousel.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar />
        {/* <AllRoutes/> */}
        <div className="pt-20" >
          <HomePage/>
          <div className="w-1/4">
          <TestCarousel/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
