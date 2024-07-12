import { Outlet } from 'react-router-dom'
import AppBody from './components/app-body'
import './index.css'
// import Header from './components/page-header'



function App() {


  return (
    <>
         <AppBody>
            <Outlet />
         </AppBody>
    </>
  )
}

export default App
