import { useState } from "react";


import { Navbar } from "./customer/components/Navbar/Navbar.jsx";
import { HomePage } from "./customer/pages/homePage";
import { Footer } from "./customer/components/Footer/index.jsx";
import ProductList from "./customer/components/Product/ProductList.jsx";
import { ProductDetail } from "./customer/components/Product/ProductDetail.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar />
        <div className="pt-20" >
          {/* <HomePage/>
          <ProductList/> */}
          <ProductDetail/>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
