
import { Route, Routes } from 'react-router-dom';
import CheckOut from './Pages/CheckOut/CheckOut';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/Header/NotFound/NotFound';
import PageTitle from './Pages/Shared/PageTitle/PageTitle';
import AddService from './Pages/AddService/AddService';
import ManageService from './Pages/ManageService/ManageService';
import { ToastContainer } from 'react-toastify';
import Order from './Pages/Order/Order';


function App() {



  return (

    <div>
      <Header></Header>
      <Routes>

        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/service/:serviceId" element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/checkout/:serviceId" element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
        <Route path="/addservice" element={<AddService></AddService>}></Route>
        <Route path="/manage" element={<ManageService></ManageService>}></Route>
        <Route path="/orders" element={<Order></Order>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>


  );
}

export default App;
