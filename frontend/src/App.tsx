import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./pages/home/Footer";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { AuthProvider } from "./context/authContex";

function App() {
  return (
    <>
      <AuthProvider>
        <Provider store={store}>
          <div className="bg-white">
            <Navbar></Navbar>
            <div className="ml-10 mr-10 font-primary py-10">
              <Outlet></Outlet>
            </div>
            <Footer></Footer>
          </div>
        </Provider>
      </AuthProvider>
    </>
  );
}

export default App;
