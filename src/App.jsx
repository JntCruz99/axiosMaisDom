import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {

  return (
    <div>
      <Navbar/>
      <div className="container">
        <Outlet/>
      </div>
    </div>
  )
}

export default App
