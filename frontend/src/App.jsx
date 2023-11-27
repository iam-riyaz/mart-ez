import { useState } from "react";


import { Navbar } from "./customer/components/Navbar/Navbar.jsx";
import { HomePage } from "./customer/pages/homePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar />
        {/* <AllRoutes/> */}
        <div className="px-8 mt-2">
          <HomePage/>
        </div>
      </div>
    </>
  );
}

export default App;
