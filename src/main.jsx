import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import App from './pages/App.jsx'
import { Layout } from './components/Layout.jsx'
import NoFound from './pages/Nofound.jsx'

createRoot(document.getElementById('root')).render(
<BrowserRouter>
  <Routes>
    <Route path="profil/:id" element={<Layout> <App /> </Layout>} />
    <Route path="*" element={<Layout> <NoFound /> </Layout>} />
  </Routes>
</BrowserRouter>,
)
