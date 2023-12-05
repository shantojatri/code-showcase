import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      {/* Navbar  */}
      <Navbar />

      {/* Main content start */}
      <main className="min-h-[85vh]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 mt-8">
          <Outlet />
        </div>
      </main>
      {/* Main content ends */}

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
