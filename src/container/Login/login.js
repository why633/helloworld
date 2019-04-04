import React from 'react'
import { InputItem, Button, WhiteSpace, WingBlank, Toast } from 'antd-mobile';
import { getUser } from '../../fetch/api'
import Logo from '../../component/logo/logo'
import './login.css'
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      passworld: ''
    }
    this.handleLogin = this.handleLogin.bind(this)
    this.userNameChange = this.userNameChange.bind(this)
    this.passworldChange = this.passworldChange.bind(this)

  }
  handleLogin () {
    console.log('登录')
    console.log(this.state)
    if (!this.state.userName || !this.state.passworld) {
      Toast.info('请输入用户名密码', 1);
    } else {
      getUser().then(res => {
        console.log(res[this.state.userName])
        if (res[this.state.userName] === this.state.passworld) {
          this.props.history.push('/list')
        } else {
          Toast.info('用户名或密码错误', 1);
        }
      })
    }
  }
  userNameChange (value) {
    this.setState({
      userName: value
    });
  }
  passworldChange (value) {
    this.setState({
      passworld: value
    });
  }
  render () {
    return (
      <div style={{ paddingTop: "60px" }}>
        <Logo />
        <WingBlank>
          <InputItem value={this.state.userName} onChange={this.userNameChange}>
            用户名
        </InputItem><WhiteSpace />
          <InputItem value={this.state.passworld} onChange={this.passworldChange} type="password">
            密码
        </InputItem><WhiteSpace />
          <Button type="primary" onClick={this.handleLogin}>登录</Button>
        </WingBlank>
      </div>
    )
  }
}
export default Login