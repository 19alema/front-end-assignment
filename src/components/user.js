import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {setUser} from '../personAction'
import { Link } from 'react-router-dom';

function User() {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true);
    const[error,setError] = useState(null)
    // Api URL
    const apiURL = 'https://reqres.in/api/users?per_page=20';

    // FUNCTIO FETCHING THE API
    const fetchUser = async () => {
             fetch(apiURL)
                 .then(res => res.json())
                 .catch(err => {
                   setError(err.message)
                 })
                 .then(data => dispatch(setUser(data.data)));
             setLoading(false)
    }
    useEffect(() => {
       fetchUser()
    }, []);
    
    // Maping out each user
    const userElement = user.map((user, pos) => {
        const { id } = user
        return (
                <Link key = {id} to = { `/user/${id}`}>
                    <div  className="buttons">
                        <p>{pos + 1} </p>
                    </div>
                </Link>
                
        )
    })
    return (
        <div>
            <p className="para">Click the button to find user...</p>
            <div className="App">
                {
                    loading && <h2>Loading...</h2>
                }

                {
                    error && <h2>Error occurred...</h2>
                }
                {userElement}
            </div>
        </div>
    )
}
export default User