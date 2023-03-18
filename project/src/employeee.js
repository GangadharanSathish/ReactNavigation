import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { employeContext } from "./App";

 
const EmployeeDetails = () => {
  const [name, setName] = useState({});
   const {employee,setEmployee}=useContext(employeContext)
  let navigate = useNavigate()
  const changeName = (e) => {setName({...name,[e.target.name]:e.target.value});};
    const next = () => { 
  navigate("/employeeSalary")
  };
  setEmployee(name);
  const dropDown = ['Trainee','Developer','ProjectLeader','ProjectManager']
    return (
        <div align="center" style={{fontFamily:"Cursive"}}>
        <form onSubmit ={(e)=>{e.preventDefault()}}> name="Name"
      EMPLOYEE LOGIN <br /><br />
      Employee Name <input type="text" onChange={changeName} /><br /><br />
      Employee Email <input type="email" name="Email" onChange={changeName} /><br /><br />
      Employee No <input type="number" name='Number'onChange={changeName} /><br /><br />
      Employee District <input type="text" name='District'onChange={changeName} /><br /><br />
      Employee Designation
     <select onChange={changeName}name='Designation'>
        <option key="select">select</option>
        {dropDown.map((val,ind)=>{return <option key={ind}>{val}</option>})}</select><br/><br />
      <input type="button"value="Next"onClick={next}className="buttoncolor"/>
      </form>
    </div>
  );
};

export default EmployeeDetails;
