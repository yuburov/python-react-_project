import React from 'react';
import {Form, Input, Button, Alert} from 'antd';
import {connect} from "react-redux";
import * as actions from "../../redux/actions/auth";
import {Redirect} from "react-router-dom";


const Login = (props) => {
  const onFinish = (values) => {
    props.onAuth(values.username, values.password)
    if (props.token) {
      props.history.push('/')
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  }

  let errorMessage = null;
    if (props.error) {
      errorMessage = (
          <div className={'mb-4'}>
            <Alert message={props.error.message} type="error" closable />
          </div>
      );
    }

  if (props.isAuth) {
    return <Redirect to={'/admin_page'}/>
  }
  return (
        <div className={'row mt-4'}>
          <div className='col col-sm-12 col-md-10 col-lg-8 col-xl-6 m-auto'>
            <h1 className={'text-center'}>Login</h1>
              {errorMessage}
            <Form
                name="basic"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
              <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your username!',
                    },
                  ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuth: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (username, password) => dispatch(actions.authLogin(username, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);


