import React,{useState} from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const NewContact = () => {
    let history = useHistory();
    const[user,setUser]=useState({
        name:"",
        username:"",
        email:"",
        phone:""
    });
    const values=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
        console.log(user)
    }
    const addNewUser=(e)=>{
        e.preventDefault();
        if(user.name.length===0 || user.email.length===0 || user.phone.length===0 || user.username.length===0){
            alert('Please Fill the all Details');
        }else{
            alert('Successfully added the new Contact');
            loadContactList();
        }
    }
    const loadContactList= async () =>{
       await axios.post("http://localhost:3005/contacts",user);
       history.push("/")
    };
    return (
        <div className="newcontact">
            <div className="newcontactheading">
                <h1 className="contactheading">Add New Contact</h1>
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
                <button onClick={(e)=>{addNewUser(e)}} className="addcontactbutton">Add New Contact</button>
             </div>
            </div>
        </div>
    )
}

export default NewContact;
