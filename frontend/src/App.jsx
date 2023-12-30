import { useState } from "react";


import { Navbar } from "./customer/components/Navbar/Navbar.jsx";
import { HomePage } from "./customer/pages/homePage";
import { Footer } from "./customer/components/Footer/index.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar />
        {/* <AllRoutes/> */}
        <div className="pt-20" >
          <HomePage/>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
