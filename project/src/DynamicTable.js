import React, { useState } from 'react';

const DynamicTable = ({table}) => {
    const tableTada =table;
    console.log(tableTada)
    const[logindata,setLogindata]=useState(tableTada);
    const values = Array.isArray(logindata)&& logindata.length ? logindata[0]:{};
    const column = Object.keys(values).map((val,ind)=>{return <th>{val}</th>})
    const rowValues = Object.values(values).map((val,ind)=>{return <td>{val}</td>})
    return ( <div><table border={1}>{column}<tbody>{rowValues}</tbody></table></div> );
}
 
export default DynamicTable;