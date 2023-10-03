import './App.css';
import "../src/tailwind.css"
import Main from './task2/components/main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Property from './task2/components/Property';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" exact element={<Main />}/>
      <Route path="/property/:id" exact element={<Property />} />
    </Routes>
  </Router>
  );
}

export default App;
