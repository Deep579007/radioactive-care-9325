import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Home from "./Components/pages/Home/Home";
import Sidebar from "./Components/sidebar/Sidebar";
import Topbar from "./Components/topbar/Topbar";
import AddProduct from "./pages/AddProduct/AddProduct";
import AddUser from "./pages/Adduser/Adduser";
import Home from "./pages/Home/Home";
import ProductList from "./pages/ProductList/ProductList";
import UserList from "./pages/UserList/UserList";

function App() {
  return (
    <div>
      <Topbar />

      <div className="container">
        <Sidebar />
        {/* <div className="orthers">Kanna</div> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/add" element={<AddUser />}></Route>
          <Route path="/users" element={<UserList />}></Route>
          <Route path="/addproduct" element={<AddProduct />}></Route>
          <Route path="/product" element={<ProductList />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
