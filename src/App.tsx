import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function App() {
  return (
    <main className="flex flex-wrap justify-center">
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </main>
  );
}

export default App;
