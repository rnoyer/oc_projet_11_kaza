import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import './layout.scss'


function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
