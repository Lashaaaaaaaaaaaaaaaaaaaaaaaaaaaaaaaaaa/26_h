import { Routes, Route, Link, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './pages/Home'
import Something from './pages/Something';
import About from './pages/About';
import Users, { loader } from './pages/Users';
import UsersLayouts from './layouts/UsersLayouts';
import FormPage, { action } from './pages/FormPage';


const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
        <Route path='/' element={<UsersLayouts />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='something' element={<Something />} />
          <Route path='/users' element={<Users />} loader={loader} />
        </Route>

        <Route path='/form-page' element={<FormPage />} action={action} />
    </Route>
  )
)
function App() {
  return <RouterProvider router={routes}/>
}

export default App;
