import "./App.css";
import "../src/tailwind.css";
import Main from "./task2/components/Main-2";
import Main1 from "./task1/components/Main-1";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Property from "./task2/components/Property";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/page/:page" exact element={<Main1 />} />
        <Route path="/property/:id" exact element={<Property />} />
      </Routes>
    </Router>
  );
}

export default App;
