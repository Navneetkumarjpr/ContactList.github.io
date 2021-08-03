import React,{useState, useEffect} from 'react'
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';


const View = () => {
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

    const loadContactList= async () =>{
        let response =await axios.get(`http://localhost:3005/contacts/${id}`);
        setUser(response.data);
        console.log(response.data);
     };
    return (
        <div className="viewpage">
            <div className="viewhead"><h1 className="viewheading">Details of The Contact</h1></div>
            <div className="viewdetails">

            <div className="viewdetailsleft">
                <div className="nameview"><h2 className="namview">{`NAME`}</h2></div>
                <div className="usernameview"><h2 className="userview">{`USERNAME`}</h2></div>
                <div className="emailview"><h2 className="emaview">{`EMAIL`}</h2></div>
                <div className="phonenumberview"><h2 className="phoneview">{`PHONE`}</h2></div>
            </div>
            <div className="viewdetailsright">
                <div className="nameview"><h2 className="namview">{`=> ${user.name}`}</h2></div>
                <div className="usernameview"><h2 className="userview">{`=> ${user.username}`}</h2></div>
                <div className="emailview"><h2 className="emaview">{`=> ${user.email}`}</h2></div>
                <div className="phonenumberview"><h2 className="phoneview">{`=> ${user.phone}`}</h2></div>
            </div>
            </div>
            <div className="viewtohome">
                <Link className="viewtoback" to="/">Back to Home</Link>
            </div>
        </div>
    )
}

export default View
