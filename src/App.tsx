
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col justify-between">
      <Navbar/>
      <Outlet></Outlet>
      <Footer/>
    </div>
  )
}

export default App;
