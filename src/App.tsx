import {BrowserRouter} from 'react-router-dom'
import './App.css'
import MainRoutes from './components/MainRoutes/MainRoutes'
import Navbar from './components/Navbar'

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <MainRoutes />
      </BrowserRouter>
    </div>
  )

}

export default App
