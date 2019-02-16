import React, {
	Component
} from 'react';
import './Xshenfen.css';
import "../../access/webStatistics.css"
//import { Link } from "react-router-dom";
class Xshenfen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tishi:[{
				title:"1、为保障账户安全，泰然金融目前只支持绑定一张银行卡，以保证资金同卡进出，建议绑定常用的银行卡。"
			},{
				title:"2、由于央行规定非I类银行卡账户充值提现有金额限制，建议您绑定I类银行卡。"
			},{
				title:"3、实名认证需要年满18周岁以上。"
			},{
				title:"4、实名认证过程中充值的金额，在认证完成后，充值金额进入北京银行存管账户，账户余额可选择提现或者出借。"
			},{
				title:"5、所充值的资金如未出借，隔日才能申请提现。"
			},{
				title:"6、如遇到问题，请联系客服热线 0571-96056。"
			}]

		};
		
	}
	
		tishi(){
			alert("系统出错")
		}
	render() {
		return(
			<div className="page-my-wrap">
				<div className="real-from-container">
					<div style={{display: "block"}}>
						<div className="container ui-from-wrap">
							<div className="col-md-24">
								<div className="from-row"><label className="label">真实姓名</label>
									<div className="field"><input type="text" name="name" placeholder="请输入真实姓名" defaultValue=""/></div>
								</div>
								<div className="from-row"><label className="label">身份证号</label>
									<div className="field"><input type="text" name="identityCode" placeholder="请输入身份证号码" defaultValue=""/></div>
								</div>
							</div>
						</div>
						<div className="container">
							<div className="col-md-24 msg"><span className="c-red"></span></div>
							<div className="col-md-24"><span className="trc-btn trc-btn-block trc-btn-orange" onClick={this.tishi.bind(this)}>下一步</span></div>
							<div className="col-md-24">
							<input type="checkbox" id="p_1" />
								<label htmlFor="p_1" >本人已阅读并同意<a className="c-f25a2b" href="https://jrcg.trc.com/trc_app/protocol/account">《出借人服务协议》</a></label></div>
							<div className="col-md-24 remind">
								<h4>温馨提示</h4>
								<ul>
									{(()=>{
				                        return this.state.tishi.map((item,index)=>{
				                            return(
				                               	<li  key={index}>
													{item.title}
												</li>
				                            )
				                        })
				                    })()}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

		)
	}

}
export default Xshenfen;