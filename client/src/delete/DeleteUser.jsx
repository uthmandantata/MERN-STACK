import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate, useParams } from 'react-router-dom';

const DeleteUser = () => {
    const users = {
        name:"",
        email:"",
        address:"",
    };
    const [user, setUser] = useState(users);
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/user/${id}`).then((response)=>{
            setUser(response.data)
        }).catch((error)=>{
            console.log(error)
        })
    }, [id])

    const submitForm = async(e)=>{
        e.preventDefault();
        await axios.delete(`http://localhost:8000/api/delete/user/${id}`, user).then((response)=>{
            console.log("User Deleted Successfully!")
            toast.success(response.data.message, {position:"top-right"})
            navigate("/")
        }).catch((error)=>{
            console.log(error)
        })
    }


  return (
    <div>
       <form action="" onSubmit={submitForm}>
       <h3>Do you really want to delete the user "{user.name}"?</h3>
       <button type="submit" className="btn btn-danger">Yes</button>
       <Link type="button" to="/" className="btn btn-secondary">No</Link>
       </form>
        
    </div>
  )
}

export default DeleteUser