import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./pages/home/Footer";
import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="bg-white">
          <Navbar></Navbar>
          <div className="ml-10 mr-10 font-primary">
            <Outlet></Outlet>
          </div>
          <Footer></Footer>
        </div>
      </Provider>
    </>
  );
}

export default App;
