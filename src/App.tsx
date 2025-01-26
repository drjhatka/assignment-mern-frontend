import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css'
function App() {
  return (
    <div >
      {/* <h1 className='text-red-500 text-md'>App</h1> */}
      <Navbar></Navbar>
      <div className='bg[#cccccc]'>
      <Outlet ></Outlet>

      </div>
    </div>
  )
}

export default App
