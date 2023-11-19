import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Form from "./pages/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Form" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
