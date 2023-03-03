// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Login from './Login';
function App() {

  //CODE FOR CHANGING TEXT FROM BYE WORLD TO HELLO WORLD  


  //   let [data, setData] = useState('bye')
  // // function changeOnClick(){
  // //   setData('hello')
  // // }
  // // function changeOnChange(event){
  // //   setData(event.target.value)
  // // }
  //   return (
  //     <div className="App">
  //       <h1 style ={{background:'red'}}> {data} World!</h1>
  //       <input text onChange={event=>setData(event.target.value)}></input>
  //       {/* <button onClick={()=>{setData('hello')}}>click me</button> */}

  //     </div>
  //   );

  //CODE FOR FORMS


  // const [name, setName] = useState('')
  // const [tnc, setTnc] = useState(false)
  // const [intrest, setIntrest] = useState('')
  // function getFormData(e) {
  //   console.warn(name, intrest, tnc)
  //   e.preventDefault()
  // }
  return (
    <>
      <Login />
    </>
  );
  // <div className="App">
  //   <h1>Form Data</h1>
  //   <form onSubmit={getFormData}>
  //     <input type='text' placeholder='enter name' onChange={(e)=>setName(e.target.value)}/><br /><br />
  //     <select onChange={(e)=>setIntrest(e.target.value)}>
  //       <option>select options</option>
  //       <option>Marvel</option>
  //       <option>Dc</option><br /><br />

  //     </select><br /><br />
  //     <input type='checkbox' onChange={(e)=>setTnc(e.target.checked)}/><span>accpet terms and conditions</span><br /><br />
  //     <button type='submit'>submit</button>
  //   </form>

  // </div >




}

export default App;


