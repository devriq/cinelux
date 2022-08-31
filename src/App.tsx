import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="grid place-items-center h-[100vh]">
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
}

export default App;
