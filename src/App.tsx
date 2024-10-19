import './App.css'
import MainPage from './components/MainPage'
import { Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound'
import Dealers from './components/Dealers'
import MarketPlace from './components/MarketPlace'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import { DefaultCarFilters } from './interfaces'

function App() {
  const [filters, setFilters] = useState<DefaultCarFilters>({});

  return (
		<div>
      <Routes>
        <Route path="/" element={<MainPage filters={filters} setFilters={setFilters} />} />
        <Route path="/dealers" element={<Dealers />} />
        <Route path="/marketplace" element={<MarketPlace filters={filters} setFilters={setFilters} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
		</div>
  )
}

export default App
