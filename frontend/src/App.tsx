import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";
import { RecoilRoot } from "recoil";
function App() {
  return (
    <>
      <RecoilRoot>
        <Navbar></Navbar>
        <div className="ml-10 mr-10 font-primary">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </RecoilRoot>
    </>
  );
}

export default App;
