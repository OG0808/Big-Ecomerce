import { Route, Routes } from "react-router-dom"
import './App.css'
import Home from "./pages/Home"
import Navbar from "./components/nabvar/Navbar.jsx"


function App() {
 

  return (
  <main className="main__container">
 <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
  </main>
  )
}

export default App
