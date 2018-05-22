import React, { Component } from 'react';
import classNames from 'classnames';
//import PropTypes from 'prop-types';
import 'font-awesome/css/font-awesome.min.css';
import Botton from './Botton';
import styles from './Login.css';




const welcomeMessage = '欢迎登陆本系统';


class Login extends Component {
  render() {
    return (
      <div className='LoginBox'>
        <p style={{ padding: '20px 0px 0px', align: 'center', position: 'relative' }}>
          <h1 className="App-title">{welcomeMessage}</h1>
        </p>
        <p className="Relative Padding1">
          <span className="fa fa-user u_logo"></span>
          <input id="UserName" name="UserName" className="ipt" type="text" placeholder="请输入用户名或邮箱" />
        </p>
        <p className="Relative">
          <span className="p_logo fa fa-key"></span>
          <input className="ipt" id="Password" type="Password" placeholder="请输入密码" />
        </p>

        <p className="Relative P2">
          <span className="s_logo fa fa-expeditedssl"></span>
          <input className="ipt " type="text" name="ValidateCode" id="ValidateCode" />
        </p>
        <div className="D2">
          <p className="M2">
            <span id="mes" className="field-validation-error">
            </span>
            <span id="Loading" style={{ display: 'none' }} className='panel-loading'><font color='#000'>加载中...</font></span>
            <span style={{ float: 'right' }}>

              <Botton
              >
                登陆
              </Botton>
            </span>
          </p>
        </div>
      </div>
    )
  }
}

export default Login;