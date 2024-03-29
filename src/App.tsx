import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Testing from './pages/Testing/Testing'

function App() {

  return (
    <>
      <Routes>
        <Route path='/game' element={<Home />} />
        <Route path='/' element={<Testing />} />

      </Routes>
    </>

  )
}

export default App
