import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import { Toaster } from 'react-hot-toast';
import Header from './components/Header/Header';

// import Testing from './pages/Testing/Testing'

function App() {

  return (
    <>
    <Toaster/>
{/*     <Header/> */}
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/' element={<Testing />} /> */}

      </Routes>
    </>

  )
}

export default App
