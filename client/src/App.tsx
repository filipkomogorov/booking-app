import { Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import SingupPage from './pages/SingupPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<IndexPage />} />
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/signup' element={<SingupPage />}/>
      </Route>
    </Routes>
  )
}

export default App
