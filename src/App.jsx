import { Route, Routes } from 'react-router'
import './App.css'
import Header from './components/Headers'
import Products from './pages/Products'
import Home from './pages/Home'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
