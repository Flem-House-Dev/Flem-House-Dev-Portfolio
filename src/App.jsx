import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <Header />
        </div>
        <div className="row">
          <main className="mx-3">
            <Outlet />
          </main>
        </div>
        <div className="row">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
