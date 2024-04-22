import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Main from "./page/Main";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
    </div>
  );
}

export default App;
