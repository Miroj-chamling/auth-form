import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Auth from "./components/auth/Auth";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/auth" exact element={<Auth />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
