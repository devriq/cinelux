import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function App() {
  return (
    <main className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </main>
  );
}

export default App;
