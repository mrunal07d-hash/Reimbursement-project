import axios from "axios";
import {useEffect,useState} from "react";

export default function Pending(){
  const [data,setData]=useState([]);

  useEffect(()=>{
    axios.get("http://localhost:5000/api/expenses").then(r=>setData(r.data));
  },[]);

  const approve=(id)=>{
    axios.put(`http://localhost:5000/api/approvals/${id}`,{
      approver:"manager",
      status:"APPROVED"
    }).then(()=>window.location.reload());
  }
    return (
    <div>
      <h2>Pending Approvals</h2>
      {data.map(e=>(
        <div key={e._id}>
          <p>{e.description}</p>
          <button onClick={()=>approve(e._id)}>Approve</button>
        </div>
      ))}
    </div>
  );
}
