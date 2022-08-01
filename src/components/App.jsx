import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Layout from './Page/Layout';
import Home from './Home/Home';
import Pokedex from './Pokedex/Pokedex';
import About from './About/About';
import FuzzyBunny from './FuzzyBunny/FuzzyBunny';
import Families from './FuzzyBunny/Families';
import Bunnies from './FuzzyBunny/Bunnies';
import FuzzyBunnyProvider from '../state/context/FuzzyBunnyContext';

export default function App() {
  return (
    <Router>
      <Toaster />
      <FuzzyBunnyProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="pokedex" element={<Pokedex />} />
            <Route path="about" element={<About />} />
            <Route path="fuzzy-bunny" element={<FuzzyBunny />}>
              <Route index element={<Families />} />
              <Route path="bunnies" element={<Bunnies />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </FuzzyBunnyProvider>
    </Router>
  );
}
