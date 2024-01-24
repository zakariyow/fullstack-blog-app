import "./index.css";

import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";
// import useAuthCheck from "./Hook/useAuthCheck";

function App() {

  // useAuthCheck();

  return (
    <div style={{ maxWidth: "1112px", marginInline: "auto" }}>
      <Toaster/>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
