import React , { useState, useEffect }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [data,setData]=useState([{}])
  useEffect(()=>{
    fetch("/members").then(
      res=>res.json()
    ).then(
      data=>{
        setData(data)
        console.log(data)
      }
    )
  },[])
  return (
    <>
    <div>
      {(typeof data.members==='undefined')?
      (
        <p>Loading....API</p>
      ):(
        data.members.map((member,i)=>
        <><p>Input number is {i}</p>
        <p>Input is {member}</p></>
        )
      )
      }
    </div>
    </>
  );
}

export default App;

