import "./App.css";
// import Home from "./Components/pages/Home/Home";
import Sidebar from "./Components/sidebar/Sidebar";
import Topbar from "./Components/topbar/Topbar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
      <Topbar />

      <div className="container">
        <Sidebar />
        {/* <div className="orthers">Kanna</div> */}
        <Home/>

      </div>
    </div>
  );
}

export default App;
