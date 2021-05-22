import React, { useState, useEffect } from 'react'

const UserProfile = ({userId}) => {
  const [user, setUser] = useState({
    userName: '',
    email: '',
    location: '',
    image: '',
    listings: ''
  
  });
  useEffect(() => {
    const getUser = async () => {
      let response = await fetch('/user/'+userId);
      let data = await response.json();
      setUser(data);
    }
    getUser ();
  },[userId])
  return (
    <div>
      <div>userName: {user.userName} </div>      
      <div>email: {user.email} </div>      
      <div>location: {user.location} </div>
      <div>image: {user.img} </div>
      <div>listings: {user.listings} </div>
  
    </div>
  )
}

export default UserProfile;