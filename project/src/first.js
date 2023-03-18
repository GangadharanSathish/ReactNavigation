import React, { useState } from 'react';
const First = () => {
    const [customername,setCustomername]=useState([]);

    useState(()=>{
        const getdata ={
            method: "GET",
            headers : {"Content-Type":"application/json"},
        };

        fetch("http://localhost:4002/customer",getdata)
        .then((res)=>res.json())
        .then((data)=>{
            setCustomername(data);  
        })
        .catch((error)=>console.log(error));
    },[]);
    return (
<div>
    <select>
        {customername.map((value,indexPosition)=>(
            <option
               key={indexPosition}
               value={value.customerid}>
                {value.customername}
               </option>
        )
        )}
    </select>
</div>
      );
}
 
export default First;