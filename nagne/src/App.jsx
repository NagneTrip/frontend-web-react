import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Mainpage from "./page/Mainpage";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Mainpage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
