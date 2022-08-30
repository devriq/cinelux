
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="w-full h-[100vh] flex flex-col justify-between">
      <Navbar/>
      <Outlet></Outlet>
      <Footer/>
    </div>
  )
}

export default App;
