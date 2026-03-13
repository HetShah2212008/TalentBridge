import React, { useEffect, useState } from "react";

function Jobs(){

const [jobs,setJobs] = useState([]);

useEffect(()=>{

fetch("http://localhost:5000/api/jobs/all")
.then(res=>res.json())
.then(data=>setJobs(data));

},[]);

return(

<div>

<h2>Available Jobs</h2>

{jobs.map((job)=>(
<div key={job._id} style={{
border:"1px solid gray",
padding:"10px",
margin:"10px"
}}>

<h3>{job.title}</h3>
<p><b>Company:</b> {job.company}</p>
<p><b>Location:</b> {job.location}</p>
<p><b>Salary:</b> {job.salary}</p>
<p>{job.description}</p>

<button>Apply</button>

</div>
))}

</div>

);

}

export default Jobs;