import React from "react"

const Users = props => {
  const users = props.users
  //jxs returen 
  return (
    <ul>
      {users.map((user) => {
        //map returen
      return <li>
        <img src={user.img} />
        {user.name}

        </li>
      })}

    </ul>
  )
}

export default Users