import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './pages/Home.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="*" element={<HomeView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
