import { Button, message } from "antd";
import { useState } from "react";
import { UserLogin } from "../api/user";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setUser } from "../store/user";
import cookie from 'react-cookies'
import "./Login.css";
import "./Register.css"

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();
  

  const login = () => {
    if (username === '' || username.length > 16) {
      messageApi.warning('账号格式错误');
      return
    }
    if (password === '' || password.length > 32) {
      messageApi.warning('密码格式错误');
      return
    }
    UserLogin(username, password).then(res => {
      if (res.data.code === 200) {
        dispatch(setUser(res.data.data.user))
        cookie.save('token', res.data.data.token, {path:"/"})
        messageApi.success('登录成功');
        navigate('/')
      } else {
        messageApi.warning(res.data.msg)
      }
    }).catch(_ => {
      messageApi.error('网络问题登录失败');
    })
  }

  return (
    <div className="login-container register-container">
      {contextHolder}
      <span className="login-item">登录</span>
      <div className="register-input" >
        <input type="text" value={username} onChange={e => {setUsername(e.target.value)}} required />
        <label>账号</label>
      </div>
      <div className="register-input" >
        <input type="password" value={password} onChange={e => {setPassword(e.target.value)}} required />
        <label>密码</label>
      </div>
      <div className="login-item">
        <Button type="link">忘记密码？</Button>
        <Button type="link" href="/register">注册账号？</Button>
      </div>
      <div className="login-item">
        <Button style={{width: '80px'}} onClick={login}>登陆</Button>
      </div>
    </div>
  );
};

export default Login;
