import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import CountryPage from './components/CountryPage';
import EndPage from './components/EndPage';

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/countrypage/:country' element={<CountryPage />} />
      <Route path='/endpage' element={<EndPage />} />
    </Routes>
  )
}

export default App
