import Home from './main/Home';
import DisplayAnimes from './main/DisplayAnimes';
import DisplaySingleAnime from './main/DisplaySingleAnime';
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
      <Route
        path='/animes'
        element={<DisplayAnimes />}
      />
      <Route
        path='/anime'
        element={<DisplaySingleAnime />}
      />
    </Routes>
  );
}

export default App;
