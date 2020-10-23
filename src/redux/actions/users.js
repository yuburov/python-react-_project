import {ADD_USER, SET_USERS} from "./actionTypes";
import {usersApi} from "../../api/api";


const setUsers = (users) => ({type: SET_USERS, users})

export const registerUser = (surname, name, lastName, phone, address, inn) => async (dispatch) => {
  let response = await usersApi.createUser(surname, name, lastName, phone, address, inn)
  console.log(response)
}
export const requestUsers = () => {
  return async (dispatch) => {
    let data = await usersApi.getUsers();
    console.log(data)
    dispatch(setUsers(data))
  }
}