import { Route, Routes } from "react-router-dom";
import "./App.css";
import Calander from "./Pages/Home/Calander";
import Completed from "./Pages/Home/Completed";
import Todo from "./Pages/Home/Todo";
import Navbar from "./Pages/Shared/Navbar";

function App() {
  return (
    <div className="App max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path="/completed" element={<Completed></Completed>}></Route>
        <Route path="/todo" element={<Todo></Todo>}></Route>
        <Route path="/calendar" element={<Calander></Calander>}></Route>
      </Routes>
    </div>
  );
}

export default App;
