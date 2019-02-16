import React, {
	Component
} from 'react';
import './signin.css';
import browserHistory from 'react-router';
class signin extends Component {
	constructor(props){
		super(props);
		this.state = {
			
		}
	}
	zhuce(){
		alert("注册成功")
		this.props.history.push('/login')
	}
	render() {
		return(
			<div>
			<div className="full-bg">
				<div className="login-wrap">
					<div className="input-wrap">
						<div className="input-item flex align-items-center">
							<input type="text"  placeholder="仅支持中国大陆手机号码" defaultValue=""/>
						</div>
						<div className="input-item flex align-items-center">
							<input type="password"  placeholder="请输入密码"/>

						</div>
						<div className="input-item flex align-items-center">
							<input type="text"  placeholder="请输入邀请码(可不填)"/>
						</div>
					</div>
					<div className="help-block fs-12">*邀请码为11位手机号</div>
					<div className="login-btn"><button className="btn btn-block btn-radius btn-blue" onClick={()=>this.zhuce()}>注册</button>
					</div>
					<div className="help-block fs-12 text-center">
					注册即表示您已阅读并同意
						<a href="http://passport.trc.com/appprotocol/taihe_service.html">《泰然一账通会员服务协议》</a>
					</div>
				</div>
			</div>
			</div>
			
			
		)
	}

}
export default signin;