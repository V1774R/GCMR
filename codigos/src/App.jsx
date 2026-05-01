import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout'
import { Home } from './components/home'
import { Pesquisa } from '../public/pages/pesquisa'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout  />}>
          <Route index element={<Home />}></Route>
          <Route path='pesquisa' element={<Pesquisa />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
