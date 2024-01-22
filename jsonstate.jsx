import React, { useState } from 'react'

function App() {
    const [user, setUser] = useState({
        "username": "",
        "password": ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // network call 
        console.log(user)
    }

    const handleUserChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            UserName: <input
                type='text'
                name="username"
                value={user.username}
                onChange={handleUserChange} />
            Password: <input
                type='text'
                name="password"
                value={user.password}
                onChange={handleUserChange} />
            <button type="submit">Submit</button>
        </form>
    )
}

export default App