import React from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';

const User = ({index,id,name,email,loadContactList}) => {
    
    const deleteContact=async(id)=>{
        await axios.delete(`http://localhost:3005/contacts/${id}`)
        loadContactList();
    }
    return (
        <div className="user">
           <div className="listnum"><h3 className="listnumber">{index+1}</h3></div>
           <div className="leftnames">
               <div className="leftinfo">
                   <div className="names"><h3 className="name">{name}</h3></div>
                   <div className="emails"><h3 className="email">{email}</h3></div>
               </div>
               <div className="butttons">
                   <div className="viewbutton"><Link className="view" to={`/user/view/${id}`}>View</Link></div>
                   <div className="editbutton"><Link className="edit" to={`/user/edit/${id}`} >Edit</Link></div>
                   <div className="deletebutton"><Link onClick={()=>{deleteContact(id)}} className="delete">Delete</Link></div>
               </div>
           </div>
        </div>
    )
}

export default User
