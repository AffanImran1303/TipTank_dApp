// import { useState } from 'react'
import { ThirdwebProvider } from '@thirdweb-dev/react'
import './App.css'
import Navbar from './components/Navbar'
import MainPage from './pages/mainpage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Tip from './pages/Tip'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <ThirdwebProvider>
    <Navbar/>
    <div >

   
      <Routes>
        <Route index element={<MainPage/>}/>
      <Route path="/tip" element={<Tip/>}/>
      </Routes>

    </div>
    </ThirdwebProvider>
    </>
  )
}

export default App
