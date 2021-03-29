import React, { Component, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkLogin } from "../../store/actions";
import { AvForm, AvField } from "availity-reactstrap-validation";
import loginLogo from "../../assets/images/logo-login.svg";
import { Button, Col, Row, Alert, Label, Input } from "reactstrap";

// const loginLogo = require('../../assets/images/logo-login.svg')
import { useHistory } from "react-router-dom";
function Login() {
  const [username, setUser] = useState("admin");
  const [password, setPassword] = useState("admin");
  const { loginError, loading } = useSelector((state: any) => ({
    loginError: state.loginError,
    loading: state.loading,
  }));
  const { user } = useSelector((state: any) => ({
    user: state.user,
  }));
  console.log("USERSTAEEEEEEEE", user);
  const history = useHistory();
  const dispatch = useDispatch();
  const dispatchLogin = (username: any, password: any, history: any) =>
    dispatch(checkLogin(username, password, history));
  const handleSubmit = (event: any, values: any) => {
    console.log("HISTORY", history);
    dispatchLogin(values.username, values.password, history);
  };

  return (
    <div className="login-form">
      <AvForm id="login_form_sec" onValidSubmit={handleSubmit}>
        <div className="login-form-body">
          <div className="form-group">
            <h2 className="text-white text-center">ĐĂNG NHẬP</h2>
          </div>

          {user && <Alert color="success">Your Login is successfull.</Alert>}

          {loginError && <Alert color="danger">{loginError}</Alert>}

          <div className="form-group ">
            <AvField
              name="username"
              id="username"
              placeholder="Tên đăng nhập "
              type="text"
              required
              className="hnd-username-fontAwesome"
              value={username}
            />
          </div>

          <div className="form-group">
            <AvField
              name="password"
              placeholder="Mật khẩu"
              type="password"
              required
              className="hnd-password-fontAwesome"
              value={password}
            />
          </div>
          <div className="form-footer text-right">
            <p className=" text-muted">
              <Link
                to="/forget-password"
                className="hnd-text-forgot font-italic"
              >
                Bạn quên kí danh hoặc mật khẩu?
              </Link>
            </p>
          </div>
          <div className="submit-btn-area">
            <Input
              type="submit"
              color="success"
              className="btn btn-success btn-fixed-w mb-3 mr-2 btn-table-green-3"
              value="Đăng nhập"
            >
              ĐĂNG NHẬP
            </Input>
          </div>
        </div>
      </AvForm>
    </div>
    // </div>
  );
}

export default Login;
