import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Homepage';
import ProductShow from './pages/ProductList';
import ContactUs from './components/ContactUs';



// import './App.css'
function App() {

  return (
    <div >
      <Router>
        <Routes>
          <Route path='/' element={<HomePage / >}/>
          <Route path='/product' element={<ProductShow / >}/>
          <Route path='/product/:id' element={<ProductShow / >}/>
          <Route path='/contact' element={<ContactUs / >}/>

        </Routes>
     
      </Router>


    </div>
  )
}

export default App

