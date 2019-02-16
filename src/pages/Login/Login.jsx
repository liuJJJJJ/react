import React, {
	Component
} from 'react';
import './Login.css';
import img from '../../access/logo.png';
import { Link} from "react-router-dom";
class Login extends Component {
	constructor(props){
		super(props);
		this.state = {
			user_name:"",
			user_pwd:""
		};
	}
	render() {
		return(
				<div className="full-bg">
				<div className="logo-wrap">
					<img src={img}/>
				</div>
				<div className="trc-key">泰然金融 让信任创造价值</div>
				<div className="login-wrap">
					<div className="login-tab flex">
						
						<div className="tab flex-item act">密码登录</div>
					</div>
					<div className="input-container">
						<div className="input-wrap">
							<div className="input-item flex align-items-center">
								<input type="text" placeholder="请输入手机号码(泰然一账通)" defaultValue="" onChange={(e)=>{
									this.getvalue(e,"user_name")
								}}/>
							</div>
							<div className="input-item flex align-items-center">
								<input type="password" placeholder="请输入密码" defaultValue="" onChange={(e)=>{
									this.getvalue2(e,"user_pwd")
								}}/>
								<div className="icon icon-eye-close"></div>
							</div>
						</div>
						<div className="login-btn">
							<button className="btn btn-block btn-radius btn-blue" onClick={()=>this.btnlogin()}>登录</button>
						</div>
						<div className="flex justify-content-end forget-psd">
							<Link to="#/findPsd?redirectUrl=https%3A%2F%2Fjrwx.trc.com%2Fmy">忘记密码</Link>
							<Link className="new-user fs-14" to="/signin"><span>新用户注册</span></Link>
						</div>
					</div>
				</div>
			</div>
			
		)
	}
	getvalue(event,key){
		let obj={};
		obj[key]=event.target.value;
		this.setState({user_name:obj[key]})
		
		
	}
	getvalue2(event,key){
		let obj={};
		obj[key]=event.target.value;
		this.setState({user_pwd:obj[key]})
		
		
	}
	btnlogin(){
		let username= this.state.user_name
		let password= this.state.user_pwd
		document.cookie="name="+username+"; path=/"
		document.cookie="password="+password+"; path=/"
		if(username===""||username===undefined){
			alert("请输入用户名")
		}else{
			if(password===""||password===undefined){
				alert("请输入密码")	
			}else{
				this.props.history.push('/terran/home')
			}
		}
		
	}
}
export default Login;