import React from "react";
import { useState } from "react";

function PostJob(){

const [title,setTitle] = useState("");
const [company,setCompany] = useState("");
const [location,setLocation] = useState("");
const [salary,setSalary] = useState("");
const [description,setDescription] = useState("");

const handleSubmit = async (e) => {

e.preventDefault();

const response = await fetch("http://localhost:5000/api/jobs/create",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
title,
company,
location,
salary,
description
})

});

const data = await response.json();

alert(data.message);

};

return(

<div>

<h2>Post Job</h2>

<form onSubmit={handleSubmit}>

<input
placeholder="Job Title"
onChange={(e)=>setTitle(e.target.value)}
/>

<input
placeholder="Company"
onChange={(e)=>setCompany(e.target.value)}
/>

<input
placeholder="Location"
onChange={(e)=>setLocation(e.target.value)}
/>

<input
placeholder="Salary"
onChange={(e)=>setSalary(e.target.value)}
/>

<textarea
placeholder="Description"
onChange={(e)=>setDescription(e.target.value)}
/>

<button type="submit">Post Job</button>

</form>

</div>

);

}

export default PostJob;