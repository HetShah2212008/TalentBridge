import React, { useEffect, useState } from "react";

function Applicants(){

const [applications,setApplications] = useState([]);

useEffect(()=>{

fetch("http://localhost:5000/api/applications")
.then(res=>res.json())
.then(data=>{
console.log(data);   // helps debug
setApplications(data);
});

},[]);

return(

<div>

<h2>Applicants</h2>

{applications.length === 0 ? (

<p>No applications found</p>

) : (

applications.map((app)=>(
<div key={app._id} style={{
border:"1px solid gray",
margin:"10px",
padding:"10px"
}}>

<h3>{app.jobId?.title}</h3>

<p><b>Company:</b> {app.jobId?.company}</p>

<p><b>Applicant:</b> {app.name}</p>

<p><b>Email:</b> {app.email}</p>

<p><b>Status:</b> {app.status}</p>

</div>
))

)}

</div>

);

}

export default Applicants;