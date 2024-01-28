import './App.css'
import { Routes,Route } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Error from './Pages/Error';
function App() {
  return (  
    <Routes>
      <Route path='/' Component={Homepage}/>
      <Route path='*' Component={Error}/>
      
    </Routes>
   
  )
}
export default App
