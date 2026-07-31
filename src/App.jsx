import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './Layout.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/" element={<Layout />} />
        <Route path="/about" element={<Layout />} />
        <Route path="/services" element={<Layout />} />
        <Route path="/projects" element={<Layout />} />
        <Route path="/testimonials" element={<Layout />} />
        <Route path="/contact" element={<Layout />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
