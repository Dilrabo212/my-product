import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainLayout } from '../Layouts/MainLayout'
import { Home } from '../modules/Home'
import { TodosRoutes } from '../modules/TodosPage/routes'
import PricePage from '../modules/PricePage/PricePage'
import Customers from '../modules/Customer/Customers'
import Resources from '../modules/ResourcesPage/Resources'


const Router = () => {
  return <BrowserRouter>
    <Routes>
      <Route path='' element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/pricing' element={<PricePage />} />
        <Route path='/customers' element={<Customers />} />
        <Route path='/resources' element={<Resources />} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default Router
