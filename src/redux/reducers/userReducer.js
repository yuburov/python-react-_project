import {ADD_USER, SET_USERS} from "../actions/actionTypes";


let initialState = {
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER: {
      return {
        ...state,
        users: [...state.users, action.payload]
      }
    }
    case SET_USERS: {
      return {
        ...state,
        users: action.users
      }
    }
    default:
      return state
  }
}

export default userReducer