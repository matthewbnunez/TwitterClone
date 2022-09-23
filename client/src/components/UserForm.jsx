import React, { useState } from 'react'
import axios from 'axios';

const UserForm = () => {
    //keep track of what is being typed via useState hook
    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/users', {
            firstName,
            lastName,
            email,
            password
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
    //onChange to update firstName and lastName
    return (
        <div className="form-group">
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>First Name</label><br/>
                <input className="form-control" type="text" onChange={(e)=>setFirstName(e.target.value)} value={firstName}/>
            </p>
            <p>
                <label>Last Name</label><br/>
                <input className="form-control" type="text" onChange={(e)=>setLastName(e.target.value)} value={lastName}/>
            </p>
            <p>
                <label>Email</label><br/>
                <input type="text" onChange={(e)=>setEmail(e.target.value)} value={email}/>
            </p>
            <p>
                <label>Password</label><br/>
                <input className="form-control" type="text" onChange={(e)=>setPassword(e.target.value)} value={password}/>
            </p>
            <button type='submit' className="btn btn-success">Submit</button>
        </form>
        </div>
    )
}

export default UserForm;