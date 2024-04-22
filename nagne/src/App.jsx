import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>{/* <Route path="/" element={</>}></Route> */}</Routes>
      <div className="main">
        <div className="main-content"></div>
        <div className="side-bar"></div>
      </div>
    </div>
  );
}

export default App;
