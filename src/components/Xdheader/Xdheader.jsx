import React, {
	Component
} from 'react';

import { Link } from "react-router-dom";
class Xiangmujieshao extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		};
		
	}
	
	render() {
		return(
			<div>
				<div className="mod-product-wrap">
						<div className="col-md-24 pro-base-info">
							<div className="pro-rate">
								<div className="rate"><span className="fs-40">11.10<em className="fs-24">%</em></span></div><label className="c-bce2f7">预期年化</label></div>
							<div className="row attribute">
								<ul className="clearfix">
									<li className="col-md-12 txtc"><span>221,800.00</span><br/><label>剩余金额(元)</label></li>
									<li className="col-md-12 txtc"><span>24个月</span><br/><label>服务期限</label></li>
								</ul>
							</div>
							<div className="pro-progress">
								<div className="progress-inner transition" style={{width: "56%"}}><span className="location"><i className="text">已售56%</i></span></div>
							</div>
						</div>
						<div className="pro-quota">
							<div className="col-md-24 clearfix">
								<label className="col-md-14 txtl c-999 fs-14">项目价值<em className="c-333">500,000.00</em>元</label>
								<span className="col-md-10 txtr c-999 fs-12 nowrap"></span>
							</div>
						</div>
					</div>
					<div className="layer-brief-wrap">
						<div className="container">
							<h3 className="col-md-24 title">项目简介</h3>
							<ul className="col-md-24 list">
								<li className="row clearfix"><label className="col-md-8">项目名称</label><span className="col-md-16">u选计划24个月No.201811230021</span></li>
								<li className="row clearfix"><label className="col-md-8">出借条件</label><span className="col-md-16">出借额度不限</span></li>
								<li className="row clearfix"><label className="col-md-8">还款方式</label><span className="col-md-16">每月还息到期还本</span></li>
								<li className="row clearfix"><label className="col-md-8">转让条件</label><span className="col-md-16">持有2个月后可以转让(参加活动除外)</span></li>
								<li className="row clearfix"><label className="col-md-8">发布时间</label><span className="col-md-16">2018-11-23 14:13:50</span></li>
								<li className="row clearfix"><label className="col-md-8">募集期</label><span className="col-md-16">72小时</span></li>
								<li className="row clearfix"><label className="col-md-8">起息日期</label><span className="col-md-16">2018-11-26（含）之前</span></li>
								<li className="row clearfix"><label className="col-md-8">募集结束时间</label><span className="col-md-16">2018-11-26 14:13:50</span></li>
							</ul>
						</div>
					</div>
				</div>
						
		)
	}

}
export default Xiangmujieshao;