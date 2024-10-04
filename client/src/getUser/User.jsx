import React, { useEffect, useState } from 'react'
import './user.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

const User = () => {
    const [users, setUsers] = useState([])
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const response = await axios.get("http://localhost:8000/api/users")
                setUsers(response.data)
            }catch(error){
                console.log("Error while fetching data", error)
            }
        }; 
        fetchData()
    }, [] );
  return (
    <div className="userTable">
        <Link type="button" class="btn btn-primary" to="/add">Add Users</Link>
        <table className="table table-border">
            <thead>
                <tr>
                    <th scope='col'>S/N</th>
                    <th scope='col'>Name</th>
                    <th scope='col'>Email</th>
                    <th scope='col'>Address</th>
                    <th scope='col'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index)=>{
                    return(
                    <tr>
                        <td>{index+1}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.address}</td>
                        <td>
                            
                            <Link to={`/update/`+user._id} type="button" class="btn btn-warning">Update</Link>
                            {/* <button type="button" class="btn btn-danger">Delete</button> */}
                            <Link to={`/delete/`+user._id} type="button" class="btn btn-danger">Delete</Link>
                        </td>
                    </tr>
                    )
                })}
                
            </tbody>
        </table>
    </div>
  )
}

export default User