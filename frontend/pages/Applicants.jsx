import React, { useEffect, useState } from "react";

function Applicants(){

const [applications,setApplications] = useState([]);

useEffect(()=>{

fetch("http://localhost:5000/api/applications")
.then(res=>res.json())
.then(data=>setApplications(data));

},[]);


// UPDATE STATUS
const updateStatus = async (id,status)=>{

await fetch(`http://localhost:5000/api/applications/status/${id}`,{

method:"PUT",

headers:{
"Content-Type":"application/json"
},

body: JSON.stringify({status})

});

alert("Status updated");

window.location.reload();

};


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

<button onClick={()=>updateStatus(app._id,"Shortlisted")}>
Shortlist
</button>

<button onClick={()=>updateStatus(app._id,"Rejected")}>
Reject
</button>

</div>
))

)}

</div>

);

}

export default Applicants;