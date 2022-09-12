import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <main className="flex flex-col justify-between min-h-screen">
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </main>
  );
}

export default App;
