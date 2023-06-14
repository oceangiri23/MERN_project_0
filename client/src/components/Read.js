import React,{useEffect, useState} from 'react';

const Read = () => {

  // form ma input gareko data receive garna 
  const [data,setData] = useState();
  const [error, setError] = useState("");

async function getData(){
const response = await fetch("http://localhost:3000");

const result = await response.json();

if(!response.ok){
  console.log(result.error);
  setError(result.error);
}

if(response.ok){
  setData(result);
}}

useEffect(()=>{
  getData();
},[]);

console.log(data);
// yaha samma data is the data


return (
  <>
    <div className="container my-2">
      <h2 className="text-center">All data</h2>
      <div className="row">

        {data?.map((ele)=>(


          <div key={ele._id} className="col-3">
             <div className="card" >
              <div className="card-body">
                <h5 className="card-title">{ele.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{ele.email}</h6>
                <p className="card-text">{ele.age}</p>
                <a href="#" className="card-link">Delete</a>
                <a href="#" className="card-link">Edit</a>
              </div>
            </div>
        </div>
        ))}
        
      </div>
    
    </div>
    </>
  )
}

export default Read