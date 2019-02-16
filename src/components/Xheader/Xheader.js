import React, {
    Component
} from "react";
import "./Xheader.js";
import "../../access/app.css";
import { connect } from 'react-redux';

class Xheader extends Component {
    constructor(props){
        super(props);
        this.state = {
				isShow:true,
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
    // html
    render(){
        return (
			<div className="row mod-fund-wrap">
	            <div className="row unlogin-panel clearfix" style={{display:`${this.state.isShow?"block" : "none"}`}}>
	            </div>
	            <div className="asset-panel clearfix" style={{display:`${this.state.isShow?"none" : "block"}`}}>
					<div className="row balance">
						<div className="col-md-24"><label className="fund-lab">我的资产(元) <div onClick={this.eye.bind(this)} className={this.state.isok?"eye-logo visible ": "eye-logo hide"}></div></label>
							<div className="fund-val"> <span className="fs-30">{this.state.isok?"18800000.00": "*******"}</span></div>
						</div>
					</div>
					<div className="row clearfix">
						<div className="col-md-12 item-wrap"><label className="fund-lab">待收收益(元)</label>
							<div className="fund-val"> <span className="fs-16">0.00</span></div>
						</div>
						<div className="col-md-12 item-wrap"><label className="fund-lab">近期回款(元)</label>
							<div className="fund-val"> <span className="fs-16">0.00</span></div>
						</div>
					</div>
				</div>
	        </div>
            
            
        	 
            
        )
    }
    // js
}

export default connect((state)=>{
    return state
})(Xheader);