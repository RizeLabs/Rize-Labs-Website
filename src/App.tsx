import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainPage } from './components/Backgorund and content/MainPage';
import "./index.css";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
