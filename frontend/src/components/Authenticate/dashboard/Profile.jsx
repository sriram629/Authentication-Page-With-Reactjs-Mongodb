import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';

const Profile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const loggedInUser = localStorage.getItem('user');
        if (loggedInUser) {
            setUser(JSON.parse(loggedInUser));
        }
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>
            <Sidebar />
            <div style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}>
                {user ? (
                    <div style={{ backgroundColor: '#fff', borderRadius: '10px', padding: '30px' ,width:'30%'}}>
                        <h2>User Profile</h2>
                        <form style={{ display: 'grid', rowGap: '10px' }}>
                            <label>Email:</label>
                            <input type="text" value={user.email} readOnly />
                            <label>First Name:</label>
                            <input type="text" value={user.firstName} readOnly />
                            <label>Last Name:</label>
                            <input type="text" value={user.lastName} readOnly />
                            <label>Phone Number:</label>
                            <input type="text" value={user.phoneNo} readOnly />
                        </form>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};

export default Profile;
