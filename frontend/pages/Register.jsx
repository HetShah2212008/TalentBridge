import React from "react";
import { useState } from "react";

function Register(){

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [phone,setPhone] = useState("");
const [education,setEducation] = useState("");
const [skills,setSkills] = useState("");
const [cv,setCv] = useState(null);

const handleSubmit = async (e) => {

e.preventDefault();

const formData = new FormData();

formData.append("name",name);
formData.append("email",email);
formData.append("password",password);
formData.append("phone",phone);
formData.append("education",education);
formData.append("skills",skills);
formData.append("cv",cv);

const response = await fetch("http://localhost:5000/api/auth/register",{
method:"POST",
body:formData
});

const data = await response.json();
alert("Registration Successful");

};

return(

<div>

<h2>Register</h2>

<form onSubmit={handleSubmit}>

<input
type="text"
placeholder="Name"
onChange={(e)=>setName(e.target.value)}
/>

<input
type="email"
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<input
type="text"
placeholder="Phone"
onChange={(e)=>setPhone(e.target.value)}
/>

<input
type="text"
placeholder="Education"
onChange={(e)=>setEducation(e.target.value)}
/>

<input
type="text"
placeholder="Skills"
onChange={(e)=>setSkills(e.target.value)}
/>

<input
type="file"
onChange={(e)=>setCv(e.target.files[0])}
/>

<button type="submit">Register</button>

</form>

</div>

);

}

export default Register;