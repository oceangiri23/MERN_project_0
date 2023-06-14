import React, { useState } from 'react'

const Create = () => {

    const [name,setName] = useState("");
    const [email,setEmail]= useState("");
    const [age,setAge] = useState(0);

    const [error,setError] = useState("");
    console.log(name,email,age);

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const addUser = {name, email,age };

        const response = await fetch("http://localhost:3000",{
            method: "POST",
            body: JSON.stringify(addUser),
            headers:{
                "Content-Type": "application/json",
            },
        });
        const result = await response.json();
        if(!response.ok){
            console.log(result.error);
            setError(result.error);
        }
        if(response.ok){
            console.log(result);
            setError("");
            setName("");
            setEmail("");
            setAge(0);
        } 
    };


  return (
    <>
    <div >
        {error && <div className='alert alert-danger'>{error}</div>}
        <h2 className='header' >Enter our Data:</h2></div>
    <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label  className="form-label">Name</label>
    <input type="name" className="form-control" value={name} onChange={(e)=> setName(e.target.value)} />
  </div>
  <div className="mb-3">
    <label  className="form-label">Email</label>
    <input type="email" className="form-control" aria-describedby="emailHelp" value={email} onChange={(e)=> setEmail(e.target.value)} />
  </div>
  <div className="mb-3">
    <label  className="form-label">Age</label>
    <input type="number" className="form-control" value={age} onChange={(e)=> setAge(e.target.value)}/>
  </div>

  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
</>
  );
}

export default Create