import React, { useState } from 'react'
import './addUser.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import toast from 'react-hot-toast';

const AddUser = () => {
    const users = {
        name:"",
        email:"",
        address:"",
    };
    const [user, setUser] = useState(users);
    const navigate = useNavigate();

    const inputHandler = (e) =>{
        const {name, value} = e.target
        console.log(name, value)
        setUser({...user, [name]:value})
    }

    const submitForm = async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:7000/api/user", user).then((response)=>{
            console.log("User created Successfully!")
            toast.success(response.data.message, {position:"top-right"})
            navigate("/")
        }).catch((error)=>{
            console.log(error)
        })
    }
  return (
    <div className='addUser'>
        
        <Link type="button" to="/" className="btn btn-secondary">Back</Link>
        <h3>AddUser</h3>
        <form className='addUserForm' onSubmit={submitForm}>
            <div className="mb-3">
                <label html="name" className="form-label">Name</label>
                <input 
                    type="text" 
                    className="form-control" 
                    onChange={inputHandler}
                    id="name" 
                    name="name"
                    autoComplete='off' 
                    placeholder='Enter your Name'/>
            </div>
            <div className="mb-3">
                <label html="email" className="form-label">Email address</label>
                <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    autoComplete='off'
                    placeholder='Enter your Email' 
                    onChange={inputHandler}
                    name="email"
                    aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label html="address" className="form-label">Address</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="address" 
                    name="address"
                    onChange={inputHandler}
                    autoComplete='off' 
                    placeholder='Enter your Address'/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default AddUser