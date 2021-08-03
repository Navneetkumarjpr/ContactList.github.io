import React,{useState, useEffect } from 'react'
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import {useParams} from 'react-router-dom';


const Edit = () => {
    let history = useHistory();
    const[user,setUser]=useState({
        name:"",
        username:"",
        email:"",
        phone:""
    });
    let {id} = useParams();
    useEffect(() => {
        loadContactList();
    }, []);
    const values=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
        console.log(user)
    }
    const addNewUser=async (e)=>{
        e.preventDefault();
        if(user.name.length===0 || user.email.length===0 || user.phone.length===0 || user.username.length===0){
            alert('Please Fill the all Details');
        }else{
            alert('Successfully updated the  Contact');
       await axios.put(`http://localhost:3005/contacts/${id}`,user);
       history.push("/");

           
        }
    }
    const loadContactList= async () =>{
       let res=await axios.get(`http://localhost:3005/contacts/${id}`);
       setUser(res.data);
    };
    return (
        <div>
             <div className="newcontact">
            <div className="newcontactheading">
                <h1 className="contactheading">Edit Contact</h1>
            </div>
            <div className="contactdetails">
             <div className="newcontacts">
                 <input className="entername" name="name" value={user.name} onChange={(e)=>values(e)} type="text" placeholder="Enter the Name" />
                  {user.name==="" && (<h6 className="error">error : enter the input value</h6>)}
                 <input className="enterusername" name="username" value={user.username} onChange={(e)=>values(e)} type="text" placeholder="Enter the Username" />
                 {user.username==="" && (<h6 className="error">error : enter the input value</h6>)}
                 <input className="enteremailaddress" name="email" value={user.email} onChange={(e)=>values(e)} type="email" placeholder="Enter the Email address" />
                 {user.email==="" && (<h6 className="error">error : enter the input value</h6>)}
                 <input className="enterphonenumber"  name="phone" value={user.phone} onChange={(e)=>values(e)} type="tel" placeholder="Enter the Phone Number" />
                 {user.phone==="" && (<h6 className="error">error : enter the input value</h6>)}
             </div>
             <div className="addcontact">
                <button onClick={(e)=>{addNewUser(e)}} className="addcontactbutton hello">Update the Contact</button>
                <Link to="/" className="cancelcontactbutton">Cancel</Link>
             </div>
            </div>
        </div>
        </div>
    )
}

export default Edit
