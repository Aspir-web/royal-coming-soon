import { Route, Routes } from 'react-router'
import './App.css'
import Header from './components/Headers'
import Products from './pages/Products'
import Home from './pages/Home'
import Footer from './components/Footer'
import AuthRegister from './pages/licenses/AuthRegister'
import BusinessCollab from './pages/licenses/BusinessCollab'
import TIN from './pages/licenses/TIN'
import Tax from './pages/licenses/Tax'
import UDYAM from './pages/licenses/UDYAM'
import Registration from './pages/licenses/Registration'
import Khoday from './pages/licenses/KhodayIndia'
import Blendwell from './pages/licenses/Blendwell'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/distribution' element={<AuthRegister/>}/>
      <Route path='/business-collaboration' element={<BusinessCollab/>}/>
      <Route path='/tin' element={<TIN/>}/>
      <Route path='/tax' element={<Tax/>}/>
      <Route path='/udyam' element={<UDYAM/>}/>
      <Route path='/registration' element={<Registration/>}/>
      <Route path='/khoday' element={<Khoday/>}/>
      <Route path='/blendwell' element={<Blendwell/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
