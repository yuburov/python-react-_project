import React from "react";
import { Route } from "react-router-dom";
import Registration from "./Components/Form/Form";
import AdminContainer from "./Components/Admin/AdminContainer";
import Login from "./Components/Login/Login";

const BaseRouter = (props) => (
    <div>
      <Route exact path="/" component={Registration} />{" "}
      <Route exact path="/admin_page" component={AdminContainer} />{" "}
      <Route exact path="/login" component={Login} />{" "}
    </div>
);

export default BaseRouter;