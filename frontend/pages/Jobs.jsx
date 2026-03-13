import React, { useEffect, useState } from "react";

function Jobs() {

const [jobs, setJobs] = useState([]);


// FETCH ALL JOBS
useEffect(() => {

fetch("http://localhost:5000/api/jobs/all")
.then((res) => res.json())
.then((data) => {
setJobs(data);
});

}, []);


// APPLY FOR JOB
const applyJob = async (jobId) => {

const response = await fetch("http://localhost:5000/api/applications/apply", {

method: "POST",

headers: {
"Content-Type": "application/json"
},

body: JSON.stringify({
jobId: jobId,
name: "Test User",
email: "test@test.com",
resume: "resume.pdf"
})

});

const data = await response.json();

alert(data.message);

};


return (

<div>

<h2>Available Jobs</h2>

{jobs.length === 0 ? (
<p>No jobs available</p>
) : (

jobs.map((job) => (

<div
key={job._id}
style={{
border: "1px solid gray",
padding: "15px",
margin: "10px"
}}
>

<h3>{job.title}</h3>

<p><b>Company:</b> {job.company}</p>

<p><b>Location:</b> {job.location}</p>

<p><b>Salary:</b> {job.salary}</p>

<p>{job.description}</p>

<button onClick={() => applyJob(job._id)}>
Apply
</button>

</div>

))

)}

</div>

);

}

export default Jobs;