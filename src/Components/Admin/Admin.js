import React from 'react'


const Admin = (props) => {
  return(
      <tr>
        <td>{props.surname}</td>
        <td>{props.name}</td>
        <td>{props.lastName}</td>
        <td>{props.phone}</td>
        <td>{props.address}</td>
        <td>{props.inn}</td>
      </tr>
  )
}

export default Admin
