import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar'
import Home from './pages/home/Home'
import Flights from './pages/flights/Flights'
import Hotels from './pages/hotels/Hotels'
import CarHire from './pages/carHire/CarHire'
import NoPage from './pages/no_page/NoPage'

function App() {

  return (
    <div>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="flights" element={<Flights />} />
          <Route path="hotels" element={<Hotels />} />
          <Route path="carHire" element={<CarHire />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
