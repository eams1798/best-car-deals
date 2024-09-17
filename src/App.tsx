import './App.css'
import MainPage from './components/MainPage'
import { Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound'
import Dealers from './components/Dealers'
import MarketPlace from './components/MarketPlace'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
		<div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/dealers" element={<Dealers />} />
        <Route path="/marketplace" element={<MarketPlace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
		</div>
  )
}

export default App
