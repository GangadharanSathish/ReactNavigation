import React from 'react';
const Customer = (props) => {
 const[name,setName]=useState('');
 const[email,setEmail]=useState('');
 const[number,setNumber]=useState('');

 const onname=(e)=>{
setName(e.target.value);
 }

 const onemail=(e)=>{
    setEmail(e.target.value);
 }

 const onnumber=(e)=>{
    setNumber(e.target.value);
 }

 const save=(e)=>{
e.preventdefaluter();
const val={
    name,
    email,
    number
};
props.func(val);
clearstate();
 };

 const clearstate=()=>{
    setName('');
    setEmail('');
    setNumber('')
 };

    return (
        <div>
             CUSTOMER LOGIN
             <br/>
             Customer Name<input type='text' placeholder='Enter a Name' onChange={onname}></input> <br/>
             Customer Email<input type='email' placeholder='Enter a Email' onChange={onemail}></input><br/>
             Customer No<input type='number' placeholder='Enter Mobile no' onChange={onnumber}></input><br/>
             <input type='button' onClick={save} >Save</input>

        </div>
       
      );
}
 
export default Customer;