import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './views/pages/Home.tsx';
import MainView from './views/pages/MainView.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="*" element={<HomeView />} />
        <Route path='/' element={<MainView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
