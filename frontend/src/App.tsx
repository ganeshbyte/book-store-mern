import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <nav>Navbar</nav>
      <Outlet></Outlet>
      <footer>Footer</footer>
    </>
  );
}

export default App;