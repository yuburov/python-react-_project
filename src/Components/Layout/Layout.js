import React from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import * as actions from "../../redux/actions/auth";
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";

const { Header, Content, Footer } = Layout;

const CustomLayout = (props) => {
  return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            {props.isAuthenticated ?
                <Menu.Item  key="1"><span onClick={props.logout}>Logout</span></Menu.Item>
                :
                <Menu.Item key="1"><Link to='/login'>Login</Link></Menu.Item>
            }
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item><Link to='/'>Home</Link></Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">{props.children}</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.logout())
  }
}

export default withRouter(connect(null, mapDispatchToProps)(CustomLayout));
