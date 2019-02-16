import React, {
	Component
} from 'react';
import './Xmoney.css';
import { Link} from "react-router-dom";
class Xmoney extends Component {
	constructor(props){
		super(props);
		this.state = {
			isShow:false,
			isok:false,
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
		this.state.username=name;
		if(name == "" || name == undefined){

		}else{
		
			
          this.state.isShow=!this.state.isShow
		}
	}
	eye(){
		this.setState({
          	isok:!this.state.isok
          })
          
	}
	render() {
		return(
			<div className="page-my-wrap" style={{display:this.state.isShow==true?"block":"none" }}>
				<div className="row ui-balance-module">
					<div className="col-md-24 clearfix">
						<div className="col-md-10">
							<label className="fs-12 c-333">可用余额
								<div onClick={this.eye.bind(this)}  className={this.state.isok?"eye-logo visible ": "eye-logo hide"}></div>
							</label><br/>
							<span className="fs-18 c-333">{this.state.isok?"18800000.00": "*******"}</span>
						</div>
						<div className="col-md-14 txtr">
							<span className="trc-btn trc-btn-outline trc-btn-blue">提现</span>
							<span className="trc-btn trc-btn-inline trc-btn-blue">充值</span>
						</div>
					</div>
				</div>
			</div>
		)
	}

}
export default Xmoney;