import * as axios from "axios";


const instance = axios.create({
  baseURL: 'http://localhost:8000/',
})

export const usersApi = {
  createUser(surname, name, lastName, phone, address, inn) {
    return instance.post(`api/user/create/`, {surname, name, lastName, phone, address, inn})
        .then(response => {
          return response.data
        });
  },
  getUsers() {
    return (
        axios.defaults.headers = {
          "Content-Type": "application/json",
          "Authorization": `Token ${localStorage.getItem('token')}`
        },
        axios.get('http://localhost:8000/api/')
        .then(response => {
          return response.data
        })
    )
  }
}