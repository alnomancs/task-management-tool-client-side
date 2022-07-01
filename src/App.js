import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Calander from "./Pages/Home/Calander";
import Completed from "./Pages/Home/Completed";
import Home from "./Pages/Home/Home";
import Todo from "./Pages/Home/Todo";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";

function App() {
  return (
    <div className="App max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/completed" element={<Completed></Completed>}></Route>
        <Route path="/todo" element={<Todo></Todo>}></Route>
        <Route path="/calendar" element={<Calander></Calander>}></Route>
      </Routes>
      <Footer></Footer>

      <ToastContainer />
    </div>
  );
}

export default App;
