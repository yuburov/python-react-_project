import React from 'react'
import {connect} from "react-redux";
import Admin from "./Admin";
import {requestUsers} from "../../redux/actions/users";
import {Redirect} from "react-router-dom";



class UsersApiContainer extends React.Component {

  componentDidMount() {
    this.props.requestUsers()
  }
  render() {
    if (!this.props.isAuth) {
      return <Redirect to={'/login'}/>
    }
    return <>
      <h1 style={{textAlign: 'center'}}>All users</h1>
          <table className="table table-hover">
            <thead>
            <tr>
              <th scope="col">Surname</th>
              <th scope="col">Name</th>
              <th scope="col">Last name</th>
              <th scope="col">Phone</th>
              <th scope="col">Address</th>
              <th scope="col">Inn</th>
            </tr>
            </thead>
            <tbody>
            {this.props.users.map(u => <Admin key={u.id}
                                              name={u.name}
                                              surname={u.surname}
                                              lastName={u.lastName}
                                              phone={u.phone}
                                              address={u.address}
                                              inn={u.inn}/>)}
            </tbody>
          </table>
    </>
  }

}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    isAuth: state.auth.token !== null
  }
}

export default connect(mapStateToProps, {requestUsers})(UsersApiContainer)

