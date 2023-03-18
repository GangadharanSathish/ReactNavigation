import React, { useState } from "react";
import DynamicTable from "./DynamicTable";
import SalaryPage from "./employeeSalary";
 
const EmployeeDATA = (props) => {
  const [name, setName] = useState({});
  const[emp,setEmp]=useState();
  const changeName = (e) => {setName({...name,[e.target.name]:e.target.value});};
   var adding =[];
  const save = () => { 
    
     setEmp( adding.push(name));
  };
console.log(emp);
  const dropDown = ['Trainee','Developer','ProjectLeader','ProjectManager']

  const Arr = [];
  Arr.push(name)
  return (
    <div align="center">
        <form onSubmit>
      EMPLOYEE LOGIN <br /><br />
      Employee Name <input type="text" name="Name" onChange={changeName} /><br />
      Employee Email <input type="email" name="Email" onChange={changeName} /><br />
      Employee No <input type="number" name='Number'onChange={changeName} /><br />
      Employee District <input type="text" name='District'onchange={changeName} /><br />
      Employee Designation
     <select onChange={changeName}name='Designation'>{dropDown.map((val,ind)=>{return <option>{val}</option>})}</select><br></br>
      <input type="button"value="Save"onClick={save}className="buttoncolor"/>
      <button>Next</button>
      </form>
      <DynamicTable table={Arr}/>
      <SalaryPage data={name}/>

    </div>
  );
};

export default EmployeeDATA;
