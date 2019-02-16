import React, {
	Component
} from 'react';
import { connect } from 'react-redux';	
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
				<div className="swiper-container swiper-container-horizontal">
					<div className="swiper-wrapper clearfinx" style={{transform: "translate3d(0px, 0px, 0px)", transitionDuration: " 0ms"}}>
						<div className="swiper-slide activity" style={{width: "375px"}}>
							<div className="product-intro-wrap container">
								<div className="ui-intro-section">
									<h3 className="ui-intro-title">计划简介</h3>
									<div>
										<div className="mt-10">
											<div className="c-333">本计划是平台推出的自动投标工具，平台提供系统和技术服务支持，经由出借人授权，在服务期限内根据本计划的条件为出借人完成撮合，为出借人完成分散投标。</div>
										</div>
									</div>
								</div>
								<div className="ui-intro-section">
									<h3 className="ui-intro-title">风险提示</h3>
									<div>
										<div className="mt-10">
											<div className="c-333">1、借款人可能会因信用状况不良导致逾期，或者恶意逾期 2、平台从借款人和第三方处获得的信息可能不正确或不能准确反映其实际情况，可能影响评估准确性 3、平台依赖于自己的信用评估模型来评估用户的信誉度，模型可能存在缺陷或者无效 4、根据《网络借贷资金存管业务指引》第二条规定，存管银行提供网络借贷资金存管业务，提供专用账户资金保管、资金清算、账务核对等服务，但不对网络借贷交易行为提供保证或担保； 仔细阅读计划详情，谨慎出借。更多风险提示，详见
											</div>
											<a href="https://jrcg.trc.com/trc_app/protocol/risk-tips" className="c-blue">《出借风险说明和禁止性行为》</a>
										</div>
									</div>
								</div>
								<div className="ui-intro-section">
									<h3 className="ui-intro-title">基本信息</h3>
									<div>
										<div className="mt-10">
											<div className="row clearfix">
												<div className="col-md-8 c-999">项目名称</div>
												<div className="col-md-16 c-333">u选计划24个月No.201811230021</div>
											</div>
											<div className="row clearfix">
												<div className="col-md-8 c-999">项目总额</div>
												<div className="col-md-16 c-333">500000.00元</div>
											</div>
											<div className="row clearfix">
												<div className="col-md-8 c-999">项目服务期</div>
												<div className="col-md-16 c-333">24个月</div>
											</div>
											<div className="row clearfix">
												<div className="col-md-8 c-999">还款方式</div>
												<div className="col-md-16 c-333">每月还息到期还本</div>
											</div>
											<div className="row clearfix">
												<div className="col-md-8 c-999">预期年化</div>
												<div className="col-md-16 c-333">11.10%</div>
											</div>
											<div className="row clearfix">
												<div className="col-md-8 c-999">发布时间</div>
												<div className="col-md-16 c-333">2018-11-23 14:13:50</div>
											</div>
											<div className="row clearfix">
												<div className="col-md-8 c-999">募集期</div>
												<div className="col-md-16 c-333">72小时</div>
											</div>
											<div className="row clearfix">
												<div className="col-md-8 c-999">起息日期</div>
												<div className="col-md-16 c-333">2018-11-26（含）之前</div>
											</div>
											<div className="row clearfix">
												<div className="col-md-8 c-999">募集结束时间</div>
												<div className="col-md-16 c-333">2018-11-26 14:13:50</div>
											</div>
											<div className="row clearfix">
												<div className="col-md-8 c-999">项目撮合进度</div>
												<div className="col-md-16 c-333">56%</div>
											</div>
										</div>
									</div>
								</div>
								<div className="ui-intro-section">
									<h3 className="ui-intro-title">协议范本</h3>
									<div>
										<div className="mt-10">
											<a href="https://jrcg.trc.com/trc_app/protocol/model/plan" className="c-blue">《泰然金融预约计划授权协议》</a>
										</div>
									</div>
								</div>
								<div className="ui-intro-section">
									<h3 className="ui-intro-title">还款保障</h3>
									<div>
										<div className="mt-10">
											<div className="c-333">平台根据出借人的委托及各方各项约定，平台作为信息中介，为借款人和出借人提供撮合服务。平台根据自有的信用评估模型对用户进行信用分析，评估维度包括但不仅限于身份证、联系方式、银行卡、工作等信息，最终筛选出信用较好的借款人。</div>
										</div>
									</div>
								</div>
								<div className="ui-intro-section">
									<h3 className="ui-intro-title">相关费用</h3>
									<div>
										<div className="mt-10">
											<div className="c-333">服务费为收益的10.00%。</div>
										</div>
									</div>
								</div>
								<div className="ui-intro-section">
									<h3 className="ui-intro-title">预披露信息</h3>
									<div>
										<div className="mt-10">
											<div className="row clearfix">
												<div className="col-md-8 c-999">借款人主体性质</div>
												<div className="col-md-16 c-333">自然人、法人</div>
											</div>
											<div className="row clearfix">
												<div className="col-md-8 c-999">借款人年龄区间</div>
												<div className="col-md-16 c-333">18-65 周岁</div>
											</div>
											<div className="row clearfix">
												<div className="col-md-8 c-999">借款人借款金额</div>
												<div className="col-md-16 c-333">100.00-500000.00元</div>
											</div>
											<div className="row clearfix">
												<div className="col-md-8 c-999">借款周期</div>
												<div className="col-md-16 c-333">24个月</div>
											</div>
											<div className="row clearfix">
												<div className="col-md-8 c-999">风险等级区间</div>
												<div className="col-md-16 c-333">A-E</div>
											</div>
											<div className="row clearfix">
												<div className="col-md-8 c-999">借款标的类型</div>
												<div className="col-md-16 c-333">企业通,泰车宝,泰信宝</div>
											</div>
											
										</div>
									</div>
								</div>
								<p className="tips c-333"> *预期年化不代表实际收益，市场有风险，出借需谨慎 </p>
							</div>
						</div>
						<div id="o1dfrgvgt68" className="swiper-slide next" style={{width: " 375px"}}>
							<div className="list-wrap rScroll">
								<div className="empty-page">
									<div className="empty-icon bill"></div>
									<h4>暂无项目组成</h4>
									<p></p>
									<div className="empty-btns-wrap"></div>
								</div>
								<div> </div>
							</div>
						</div>
						<div id="mkbar9velf8" className="swiper-slide invest-record-wrap" style={{width: "375px"}}>
							<div className="list-wrap rScroll">
								<div className="ui-record-head clearfix container">
									<div className="row">
										<div className="col-md-16 txtl"><span>出借人</span></div>
										<div className="col-md-8 txtr"><span>出借金额</span></div>
									</div>
								</div>
								<div className="page-load">
									<div className="trc-icon-loading"></div>
									<p>加载中...</p>
								</div>
								<div> </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}

}
export default connect((state)=>{
    return state
})(Xiangmujieshao);;