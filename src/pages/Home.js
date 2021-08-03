import React,{useState, useEffect } from 'react'
import axios from 'axios';
import User from '../Components/User';
let bool=true;
const Home = () => {
    const[user,setUser]= useState([]);
    useEffect(() => {
        loadContactList();
    }, []);

    const loadContactList= async () =>{
       let response =await axios.get("http://localhost:3005/contacts");
       setUser(response.data.reverse());
    //    console.log(user);
    };
    const reverseTheList=async()=>{
        let response =await axios.get("http://localhost:3005/contacts");
        if(bool===true){
          setUser(response.data);
           bool=false
        }else{
            setUser(response.data.reverse());
            bool=true;
        }
    }
    return (
        <div className="homepage">
            <div className="header">
                <div className="num"><h3 className="numhead">#</h3></div>
                <div className="nam"><h3 className="namhead">Name</h3><button className="reverse upper" onClick={()=>reverseTheList()}>Reverse the order</button></div>
                <div className="ema"><h3 className="emahead">Email</h3><button className="reverse" onClick={()=>reverseTheList()}>Reverse the order</button></div>
            </div>
            <div className="userlist">
                {
                    user.map((item,index)=>{
                     return <User key={index} index={index} id={item.id} name={item.name} email={item.email} loadContactList={loadContactList}/>
                 })
                } 
            </div>
        </div>
    )
}

export default Home
