import React, {Component} from 'react';
import './App.css';
import {connect} from "react-redux";
import * as actions from "./redux/actions/auth";
import CustomLayout from "./Components/Layout/Layout";
import BaseRouter from "./routes";


class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    return (
        <div>
            <CustomLayout {...this.props}>
              <BaseRouter />
            </CustomLayout>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

