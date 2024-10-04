import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import toast from 'react-hot-toast';
import './update.css'

const Update = () => {
    const users = {
        name:"",
        email:"",
        address:"",
    };
    const [user, setUser] = useState(users);
    const navigate = useNavigate();
    const {id} = useParams();

    const inputHandler = (e) =>{
        const {name, value} = e.target
        console.log(name, value)
        setUser({...user, [name]:value})
    };

    useEffect(()=>{
        axios.get(`http://localhost:7000/api/user/${id}`).then((response)=>{
            setUser(response.data)
        }).catch((error)=>{
            console.log(error)
        })
    }, [id])

    const submitForm = async(e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:7000/api/update/user/${id}`, user).then((response)=>{
            console.log("User updated Successfully!")
            toast.success(response.data.message, {position:"top-right"})
            navigate("/")
        }).catch((error)=>{
            console.log(error)
        })
    }
  return (
    <div className='updateUser'>
        <Link type="button" to="/" className="btn btn-secondary">Back</Link>
        <h3>Update User</h3>
        <form className='updateUserForm' onSubmit={submitForm}>
            <div className="mb-3">
                <label html="name" className="form-label">Name</label>
                <input 
                    type="text" 
                    className="form-control" 
                    onChange={inputHandler}
                    value={user.name}
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
                    value={user.email}
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
                    value={user.address}
                    onChange={inputHandler}
                    autoComplete='off' 
                    placeholder='Enter your Address'/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default Update