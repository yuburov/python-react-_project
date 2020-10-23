import React from 'react'
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormControls";
import {maxLengthCreator, required} from "../../Utils/Validators/Validators";
import {connect} from "react-redux";
import {registerUser} from "../../redux/actions/users";


const Registration = (props) => {
  let onSubmit = (formData) => {
    props.registerUser(formData.surname, formData.name, formData.lastName, formData.phone, formData.address, formData.inn)
  }
  return (
      <div>
        <h1 style={{textAlign:'center', marginTop: "10px"}}>Registration</h1>
        <RegistrationReduxForm onSubmit={onSubmit} />
      </div>
  )
}

const maxLength100 = maxLengthCreator(100)
const maxLength50 = maxLengthCreator(50)
const maxLength200 = maxLengthCreator(200)

const RegistrationForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
        <div className="form-row">
          <div className="form-group col">
            <label htmlFor="surname">Surname</label>
            <Field component={Input} name={'surname'} placeholder={'Input your surname'}
              validate={[required, maxLength100]}/>
          </div>
          <div className="form-group col">
            <label htmlFor="name">Name</label>
            <Field component={Input} name={'name'} placeholder={'Input your name'}
                   validate={[required, maxLength100]}/>
          </div>
          <div className="form-group col">
            <label htmlFor="lastName">Last name</label>
            <Field component={Input} name={'lastName'} placeholder={'Input your last name'}
                   validate={[required, maxLength100]}/>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <Field component={Input} name={'phone'} placeholder={'Input your phone'}
                 validate={[required, maxLength50]}/>
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <Field component={Input} name={'address'} placeholder={'Input your address'}
                 validate={[required, maxLength200]}/>
        </div>
        <div className="form-group">
          <label htmlFor="inn">Inn</label>
          <Field component={Input} name={'inn'} placeholder={'Input your inn'}
                 validate={[required, maxLength50]}/>
        </div>
        <button className="btn btn-primary">Sign up</button>
      </form>
  )
}

const RegistrationReduxForm = reduxForm({form: 'registration'})(RegistrationForm)

export default connect (null, { registerUser })(Registration)
// class CustomForm extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       surname: '',
//       name: '',
//       lastName: '',
//       phone: '',
//       address: '',
//       inn: ''
//     }
//   }
//
//   submitHandler = event => {
//     event.preventDefault();
//     const {surname, name, lastName, phone, address, inn} = this.state;
//     usersApi.createUser(surname, name, lastName, phone, address, inn)
//         .then(res=> console.log(res))
//     // this.props.addUser(surname, name, lastName, phone, address, inn)
//     // const newPost = {
//     //   surname, id: Date.now().toString()
//     // };
//     // console.log(newPost);
//     this.setState({
//       surname: '',
//       name: '',
//       lastName: '',
//       phone: '',
//       address: '',
//       inn: ''
//     })
//   };
//
//   changeInputHandler = event => {
//     event.persist();
//     this.setState(prev => ({...prev, ...{
//         [event.target.name]: event.target.value
//       }}))
//   };
//   render() {
//     return(
//         <>
//           <h1 style={{textAlign:'center', marginTop: "10px"}}>Registration</h1>
//           <form onSubmit={this.submitHandler}>
//             <div className="form-row">
//               <div className="form-group col">
//                 <label htmlFor="inputSurname">Surname</label>
//                 <input type="text"
//                        className="form-control"
//                        placeholder='Input your surname'
//                        name='surname'
//                        value={this.state.surname}
//                        onChange={this.changeInputHandler}/>
//               </div>
//               <div className="form-group col">
//                 <label htmlFor="inputName">Name</label>
//                 <input type="text"
//                        className="form-control"
//                        placeholder='input your name'
//                        name='name'
//                        value={this.state.name}
//                        onChange={this.changeInputHandler}/>
//               </div>
//               <div className="form-group col">
//                 <label htmlFor="inputLastName">Last name</label>
//                 <input type="text"
//                        className="form-control"
//                        placeholder='input your last name'
//                        name='lastName'
//                        value={this.state.lastName}
//                        onChange={this.changeInputHandler}/>
//               </div>
//             </div>
//             <div className="form-group">
//               <label htmlFor="inputPhone">Phone</label>
//               <input type="text"
//                      className="form-control"
//                      placeholder="Input your phone number"
//                      name='phone'
//                      value={this.state.phone}
//                      onChange={this.changeInputHandler}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="inputAddress">Address</label>
//               <input type="text"
//                      className="form-control"
//                      placeholder="1234 Main St"
//                      name='address' value={this.state.address}
//                      onChange={this.changeInputHandler}
//
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="inputInn">Inn</label>
//               <input type="text"
//                      className="form-control"
//                      placeholder="Input your inn"
//                      name='inn' value={this.state.inn} onChange={this.changeInputHandler}
//               />
//             </div>
//             <button type="submit" className="btn btn-primary">Sign in</button>
//           </form>
//         </>
//     )
//   }
// }

// export default CustomForm