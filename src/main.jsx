import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import App from './App.jsx'
import { Layout } from './Layout.jsx'

createRoot(document.getElementById('root')).render(
<BrowserRouter>
  <Routes>
    <Route path="profil/:id" element={<Layout> <App /> </Layout>} />
  </Routes>
</BrowserRouter>,
)
