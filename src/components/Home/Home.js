import React, { useEffect, useState } from 'react';
import User from '../User/User';


const Home = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <h1 style={{margin:"20px 220px"}}>User Length: {users.length}</h1>
            {
                users.map(user => <User user={user}></User>)
            }
        </div>
        
    );
};

export default Home;