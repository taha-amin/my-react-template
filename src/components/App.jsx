import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import List from './List/List';
import About from './About/About';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="list" element={<List />} />
        <Route path="about" element={<About />} />
      </Routes>
    </Router>
  );
}
