import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.scss'
import Layout from './layout/Layout.jsx'
import App from './pages/App.jsx'
import Fiche from './pages/Fiche.jsx';
import Apropos from './pages/Apropos.jsx';
import Err404 from './pages/Err404.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='/' element={<App />} />
          <Route path='/fiche/:id' element={<Fiche />} />
          <Route path='/apropos' element={<Apropos />} />
          <Route path='/404' element={<Err404 />} />
          <Route path='*' element={<Err404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
