import React, {
	Component
} from 'react';
import './Profile.css';
import { Link } from "react-router-dom";
class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			arr: [{
				title: "手机号",
				username: ""
			}, {
				title: "昵称",
				username: "未设置"
			}, {
				title: "性别",
				username: "未设置"
			}, {
				title: "生日",
				username: "未设置"
			}],

		}
		this.xuanran();
	}
	getCookie(cname) {
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for(var i = 0; i < ca.length; i++) {
			var c = ca[i].trim();
			if(c.indexOf(name) == 0) return c.substring(name.length, c.length);
		}
		return "";
	}
	xuanran() {
		var pwd = this.getCookie("password");
		var name = this.getCookie("name");

		for(var i = 0; i < this.state.arr.length; i++) {
			this.state.arr[0].username = name;
		}
	}
	
	logon(){
		var d = new Date();
		var data=d.getDate()-1
		document.cookie="name= ; expires="+data+"; path=/"
		document.cookie="password= ; expires="+data+"; path=/"
		
	}
	render() {
		return(
			<div>
				<div className="container page-personal">
					<ul className="row ui-info">
						<li className="col-md-24 clearfix ui-info-item"><span className="label label-avatar">头像</span>
							<div className="avatar right"><img src="https://oixlihnn9.qnssl.com/o_1b2ag6hg51ftlathbd01l7g1j1f9.png?imageView2/1/w/50/h/50"/></div>
						</li>
						
						
						{(()=>{
                    return this.state.arr.map((item,index)=>{
                    	return(
                        <li className="col-md-24 clearfix ui-info-item" key={index}>
							<span className="label">{item.title}</span>
							<span className="right">{item.username}</span>
						</li>)
                    })
                })()}
					</ul>
					<ul className="row ui-info">
						<li className="col-md-24 clearfix ui-info-item">
							<span className="label">存管实名认证</span>
							<span className="right arrow">立即开通</span>
							<Link className="block-link" to="/security/realname/authorize"></Link>
						</li>
					</ul>
					<ul className="row ui-info">
						<li className="col-md-24 clearfix ui-info-item">
							<span className="label">业务授权</span>
							<span className="right arrow c-11c4b2">立即授权</span>
						</li>
					</ul>
					<ul className="row ui-info">
						<li className="col-md-24 clearfix ui-info-item">
							<span className="label">登录密码</span>
							<span className="right arrow">修改</span>
							<Link to="https://passportm.trc.com/#/modify?redirectUrl=https%3A%2F%2Fjrwx.trc.com%2Fmy%2Fpersonal" className="block-link"></Link>
						</li>
					</ul>
					
					<ul className="row ui-info">
						<li className="col-md-24 clearfix ui-info-item">
							<span className="label">风险评估</span>
							<span className="right ">
								<span className="c-11c4b2">立即评估</span>
								<span className="arrow"></span>
							</span>
							<Link to="https://jrhelp.trc.com/trc_question/questionnaire_h5" className="block-link"></Link>
						</li>
					</ul>
					<div className="sign-out row txtc c-f25a2b">退出登录
						<Link  to="/login" className="block-link" onClick={this.logon}></Link>
					</div>
				</div>
			</div>
		)
	}

}
export default Profile;