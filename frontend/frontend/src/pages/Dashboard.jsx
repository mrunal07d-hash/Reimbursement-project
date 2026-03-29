import {useEffect,useState} from "react";
import axios from "axios";

export default function Dashboard(){
  const [data,setData]=useState([]);

  useEffect(()=>{
    axios.get("http://localhost:5000/api/expenses").then(r=>setData(r.data));
  },[]);

  return (
    <div>
      <h1>Dashboard</h1>
      {data.map(e=>(
        <div key={e._id}>
          <p>{e.description}</p>
          <p>{e.amount}</p>
          <p>{e.status}</p>
        </div>
      ))}
    </div>
  );
}
