import React, {
	Component
} from 'react';
import './Xmymian.css';
import { Link} from "react-router-dom";

class Xmymian extends Component {
	constructor(props){
		super(props);
		this.state = {
			arr1:[{
				title:"回款日历"
				,href:'/login'
				,icon:"nav-profit"
			},{
				title:"资金流水"
				,href:'/fund'
				,icon:"nav-file"
			},{
				title:"出借记录"
				,href:'/record/Fund'
				,icon:"nav-notes"
			},{
				title:"标的转让"
				,icon:"nav-transform"
				,href:'/record/Fund'
			}],
			arr2:[{
				title:"我的卡券"
				,icon:"nav-coupon"
				,href:''
			},{
				title:"我的T币"
				,icon:"nav-thb"
				,href:''
			},{
				title:"小泰智投"
				,icon:"nav-autobid"
				,href:'/Xshenfen'
			}],
			arr3:[{
				title:"收益计算器"
				,icon:"nav-calculator"
				,href:''
			},{
				title:"联系客服"
				,icon:"nav-service"
				,href:''
			},{
				title:"常见问题"
				,icon:"nav-help"
				,href:'https://jrhelp.trc.com/helpCenter/trc_help_center_h5'
			}],
			isShow:false,
		};
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
	
	render() {
		return(
			<div className="page-my-wrap">
				<div className="row ui-u-nav-module">
			<div className="ui-nav-list">
				<ul>
					{(()=>{
                    return this.state.arr1.map((item,index)=>{
                    	return(
                        <li className="col-md-24 u-nav-item" key={index} onClick={this.go}>
							<Link className="block-link" to={this.state.isShow?`${item.href}` : "/login"}></Link>
							<div className="col-md-24 clearfix">
								<span className={`nav-icon ${item.icon}`}>&nbsp;</span>
								<span className="nav-txt">{item.title}</span>
								<span className="arrow right">  </span>
							</div>
						</li>)
                    })
                })()}
						
				</ul>
			</div>
			<div className="ui-nav-list">
				<ul>
					{(()=>{
                    return this.state.arr2.map((item,index)=>{
                    	return(
                        <li className="col-md-24 u-nav-item" key={index}>
							<Link className="block-link" to={this.state.isShow?`${item.href}` : "/login"}></Link>
							<div className="col-md-24 clearfix">
								<span className={`nav-icon ${item.icon}`}>&nbsp;</span>
								<span className="nav-txt">{item.title}</span>
								<span className="arrow right">  </span>
							</div>
						</li>)
                    })
                })()}

				</ul>
				
			</div>
			<div className="ui-nav-list">
				<ul>
					{(()=>{
                    return this.state.arr3.map((item,index)=>{
                    	return(
                        <li className="col-md-24 u-nav-item" key={index}>
							<Link className="block-link" to={this.state.isShow?`${item.href}` : "/login"}></Link>
							<div className="col-md-24 clearfix">
								<span className={`nav-icon ${item.icon}`}>&nbsp;</span>
								<span className="nav-txt">{item.title}</span>
								<span className="arrow right">  </span>
							</div>
						</li>)
                    })
                })()}
					
				</ul>
			</div>
		</div>
			</div>
		)
	}

}
export default Xmymian;