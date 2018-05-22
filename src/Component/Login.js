import React, { Component } from 'react';
import classNames from 'classnames';
//import PropTypes from 'prop-types';
import font from 'font-awesome/css/font-awesome.min.css';
import Botton from './Botton';
import styles from './Login.css';
import appStyles from '../App.css';




const welcomeMessage = '欢迎登陆本系统';


class Login extends Component {
  render() {
    return (
      <div className={styles.LoginBox}>
        <p style={{ padding: '20px 0px 0px', align: 'center', position: 'relative' }}>
          <h1 className={appStyles['App-title']}>{welcomeMessage}</h1>
        </p>
        <p className={styles.Padding1}>
          <span className={styles.u_logo}></span>
          <input id="UserName" name="UserName" className={styles.ipt} type="text" placeholder="请输入用户名或邮箱" />
        </p>
        <p className={styles.Relative}>
          <span className={styles.p_logo}></span>
          <input className={styles.ipt} id="Password" type="Password" placeholder="请输入密码" />
        </p>

        <p className={styles.P2}>
          <span className={styles.s_logo}></span>
          <input className={styles.ipt} type="text" name="ValidateCode" id="ValidateCode" />
        </p>
        <div className={styles.D2}>
          <p className={styles.M2}>
            <span id="mes" className={styles['field-validation-error']}>
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