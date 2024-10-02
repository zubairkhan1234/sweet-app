


// import React from 'react'
// import Login from '../login/Login'
// import Signup from '../signup/SignUp'
// import Dashboard from '../dashboard/Dashboard'
// import Home from "../home/Home";
// import AddShopCard from '../admin/AddShopCard'
// import DeletedOrder from '../admin/deletedOrder'
// import AppRoute from '../routes/AppRouting'
// import Allorders from '../admin/Allorders'
// import AcceptedOrder from '../admin/AcceptedOrder'
// import DeliveringOrder from '../admin/DeliveringOrder'
// import MyOrders from '../my orders/MyOrders';
// import { UseGlobalState, UseGlobalStateUpdate } from "../../context/context"


// import {
//   HashRouter  as Router,
//   Route,
//   Redirect
// } from "react-router-dom";


// function Navigation() {

//   const globalState = UseGlobalState();
//   const setGlobalState = UseGlobalStateUpdate()




//   return (
//     <>
//       <Router>
//         <AppRoute />
//         {globalState.role === null ?
//           <>
//             <Route exact path="/">
//               <Login />
//             </Route>
//             <Route path="/signup">
//               <Signup />
//             </Route>

//             <Route path="*">
//               <Redirect to="/" />
//             </Route>
//           </>
//           : null}
//         {globalState.role === "user" ?
//           <>
//             <Route exact path="/">
//               <Dashboard />
//             </Route>
//             <Route path="/my-all-orders">
//               <MyOrders />
//             </Route>
//             <Route  path="*">
//               <Redirect to="/" />
//             </Route>
//           </>
//           : null}
//         {globalState.role === "admin" ?
//           <>
//             <Route path="/AddShopCard">
//               <AddShopCard />
//             </Route>
//             <Route exact path="/">
//               <Allorders />
//             </Route>
//             <Route path="/order/delete">
//               <DeletedOrder />
//             </Route>
//             <Route exact path="/Accepted-order">
//               <AcceptedOrder />
//             </Route>
//             <Route exact path="/Delivered-order">
//               <DeliveringOrder />
//             </Route>
//             <Route path="*">
//               <Redirect to="/" />
//             </Route>
//           </>

//           : null}
//       </Router>
//     </>
//   )
// }


// export default Navigation;

import React from 'react';
import Login from '../../pages/auth/login/Login';
import Signup from '../../pages/auth/signup/SignUp';
import Dashboard from '../dashboard/Dashboard';
// import AddShopCard from '../admin/AddShopCard';
// import DeletedOrder from '../admin/deletedOrder';
// import AppRoute from '../routes/AppRouting';
import Allorders from '../../pages/admin/Allorders';
// import AcceptedOrder from '../admin/AcceptedOrder';
// import DeliveringOrder from '../admin/DeliveringOrder';
// import MyOrders from '../my orders/MyOrders';
import { UseGlobalState } from "../../context/context";

import {
  HashRouter as Router,
  Route,
  Navigate,
  Routes
} from "react-router-dom";

function Navigation() {
  const globalState = UseGlobalState();

  console.log("navigation ", globalState.role)
  return (
    <Router basename='/'>
      {/* <AppRoute /> */}
      <Routes>
        <Route path="/" element={globalState.role === null ? <Login /> : (globalState.role === "user" ? <Dashboard /> : <Allorders />)} />
        <Route path="/signup" element={globalState.role === null ? <Signup /> : <Navigate to="/" replace />} />
        {/* <Route path="/my-all-orders" element={globalState.role === "user" ? <MyOrders /> : <Navigate to="/" replace />} />
        <Route path="/AddShopCard" element={globalState.role === "admin" ? <AddShopCard /> : <Navigate to="/" replace />} />
        <Route path="/order/delete" element={globalState.role === "admin" ? <DeletedOrder /> : <Navigate to="/" replace />} />
        <Route path="/Accepted-order" element={globalState.role === "admin" ? <AcceptedOrder /> : <Navigate to="/" replace />} />
        <Route path="/Delivered-order" element={globalState.role === "admin" ? <DeliveringOrder /> : <Navigate to="/" replace />} /> */}
        {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
      </Routes>
    </Router>
  );
}

export default Navigation;
