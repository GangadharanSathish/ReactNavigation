import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { employeContext } from './App';
const SalaryPage = () => {
  const {employee,setEmployee}=useContext(employeContext);

 const wages= [{Position:"Trainee",salary: "15k to 20k"},{Position:"Developer",salary:"20k to 30k"},{Position:"ProjectLeader",salary:"30k to 40k"},{Position:"ProjectManager",salary:"40k to 50k"}]
 let salary  = wages.filter((val,ind)=>{
      return   employee.Designation === val.Position
 })
  let navigate = useNavigate()
    return ( <div style={{fontFamily:"Impact"}}>
      <pre>
      <p>Name:<span style={{color:"orange"}}>{employee.Name}</span></p>
      <p>Designation:<span style={{color:"red"}}>{employee.Designation}</span></p>
      <p>Salary:<span style={{color:"green"}}>{salary.map((val,ind)=>{ return val.salary})}</span></p>
      <button onClick={()=>{navigate("/")}}>Back</button>
      </pre>
    </div> );
}
 
export default SalaryPage;