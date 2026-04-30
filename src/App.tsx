import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './views/pages/Home.tsx';
import MainView from './views/pages/MainView.tsx';
import Person from './views/pages/Person.tsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="*" element={<HomeView />} />
        <Route path='/' element={<MainView />} />
        <Route path='/' element={<Person />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
