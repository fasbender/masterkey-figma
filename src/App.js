import HomePage from './pages/HomePage';
import ContactUs from './pages/ContactUs';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import './App.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<HomePage />}/>
      <Route path="/contact-us" element={<ContactUs />}/>
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />;
}

export default App;
