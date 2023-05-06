
import React from 'react'
import {BrowserRouter,Router,Route,Routes} from 'react-router-dom';

import Main from './Component/Main';
import { AuthProvider } from './Context/AuthContext';
import SignUp from './Component/SignUp';
import LogIn from './Component/Login';
import PrivateRoute from './Component/PrivateRoute';
import Front from './Component/Front';
function App() {
  return(
   <BrowserRouter>
   <AuthProvider>
     <Routes>
    <Route path='/login' Component={LogIn}></Route>
    <Route path='/signup' Component={SignUp}></Route>
    <Route path='/main' Component={Main}></Route>
    <Route element= { <PrivateRoute/>}>
      <Route element={<Front/>} path="/"></Route>
    </Route>
    </Routes>
    </AuthProvider>
   </BrowserRouter>
  );
}

export default App;
