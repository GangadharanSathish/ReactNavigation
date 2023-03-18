
import React, { createContext, useState } from 'react';
import {BrowserRouter,Link,Routes,Route,Outlet}from 'react-router-dom'
import SalaryPage from './employeeSalary';
import EmployeeDetails from './employeee';


export  const employeContext = createContext()
function App() {
  const [employee,setEmployee] = useState([])
  return (
    <BrowserRouter>
    <Link to="/" style={{textDecoration:"none",color:"darkblue"}}>EmployeeDetails</Link> &nbsp; &nbsp;
    <Link to="/employeeSalary"style={{textDecoration:"none",color:"darkblue"}}>EmployeeSalary</Link>

    <employeContext.Provider value={{employee,setEmployee}} >
    <Routes>
      <Route path="/" element={<EmployeeDetails></EmployeeDetails>}/>
      <Route path="/employeeSalary" element={<SalaryPage></SalaryPage>}/>
    </Routes>
    </employeContext.Provider>
    <Outlet/>
    </BrowserRouter>
  
  );
}

export default App;
