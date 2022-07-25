import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Layout from './Page/Layout';
import List from './List/List';
import About from './About/About';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="list" element={<List />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}
