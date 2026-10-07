import './App.css'

import { Routes, Route, Link } from 'react-router-dom'
import List from './pages/List'
import Gallery from './pages/Gallery'
import Details from './pages/Details'

function App() {
  return (
    <div>
     <nav>
   <Link className="mainbutton" to="/photos">LIST VIEW  </Link>
   <Link className="mainbutton" to="/gallery">GALLERY VIEW</Link>
</nav>

      <Routes>
        <Route path="/photos" element={<List />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/photos/:id" element={<Details />} />
      </Routes>
    </div>
  )
}

export default App