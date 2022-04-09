import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    selectedUser,
} from "./userAction.js";


import '../App.css'
function UserCard() {
    const [loading, setLoading] = useState(true);
    const person = useSelector((state) => state.user);
    const dispatch = useDispatch();

    // Unique id for fetching the data for a user
    const { userId } = useParams();
    
    // Single user api link
    const single_user_api = `https://reqres.in/api/users/${userId}`;


    // Function to fetch the api
    const getUser = async () => {
       fetch(single_user_api)
           .then(resp => resp.json())
           .catch(err => {
               console.log(err.message)
           })
           .then(data =>{
               dispatch(selectedUser(data.data)))
             setLoading(false)
       }
  }
    useEffect(() => {
        if (userId && userId !== "") getUser();
    }, [userId])
   
    return (
    <section>
        {loading? <h2>loading user..</h2> : (   
        <div className="card">
                <div className="header">
                    <img src={person.avatar} alt={person.last_name} />
                    <div>
                        <h4>First Name: {person.first_name}</h4>
                        <h4>Last Name: {person.last_name}</h4>
                        <p>Email: {person.email}</p>
                    </div>
                </div>
        </div> )
        }
    </section>
    )
}

export default UserCard;

