import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
