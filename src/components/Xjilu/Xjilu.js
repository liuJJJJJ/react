import React, {
	Component
} from 'react';
import { connect } from 'react-redux';	
import { Link } from "react-router-dom";
class Xjilu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		};
		
	}
	
	render() {
		return(
			<div id="mkbar9velf8" className="swiper-slide invest-record-wrap activity" style={{width: "375px"}}>
			<div className="list-wrap rScroll">
				<div className="ui-record-head clearfix container">
					<div className="row">
						<div className="col-md-16 txtl"><span>出借人</span></div>
						<div className="col-md-8 txtr"><span>出借金额</span></div>
					</div>
				</div>
				<ul>
					<li className="ui-record-item clearfix col-md-24">
						<div className="col-md-16 txtl">
							<a href="javascript:void(0);"> <span className="fs-14">139******73</span></a><br/><i className="c-999">2018-11-23</i></div>
						<div className="col-md-8 loan-money c-999"><span className="fs-16">1100.00</span></div>
					</li>
					<li className="ui-record-item clearfix col-md-24">
						<div className="col-md-16 txtl">
							<a href="javascript:void(0);"> <span className="fs-14">153******09</span></a><br/><i className="c-999">2018-11-23</i></div>
						<div className="col-md-8 loan-money c-999"><span className="fs-16">100.00</span></div>
					</li>
					<li className="ui-record-item clearfix col-md-24">
						<div className="col-md-16 txtl">
							<a href="javascript:void(0);"> <span className="fs-14">159******24</span></a><br/><i className="c-999">2018-11-23</i></div>
						<div className="col-md-8 loan-money c-999"><span className="fs-16">5000.00</span></div>
					</li>
					<li className="ui-record-item clearfix col-md-24">
						<div className="col-md-16 txtl">
							<a href="javascript:void(0);"> <span className="fs-14">135******17</span></a><br/><i className="c-999">2018-11-23</i></div>
						<div className="col-md-8 loan-money c-999"><span className="fs-16">2800.00</span></div>
					</li>
					<li className="ui-record-item clearfix col-md-24">
						<div className="col-md-16 txtl">
							<a href="javascript:void(0);"> <span className="fs-14">137******99</span></a><br/><i className="c-999">2018-11-23</i></div>
						<div className="col-md-8 loan-money c-999"><span className="fs-16">200000.00</span></div>
					</li>
					<li className="ui-record-item clearfix col-md-24">
						<div className="col-md-16 txtl">
							<a href="javascript:void(0);"> <span className="fs-14">138******95</span></a><br/><i className="c-999">2018-11-23</i></div>
						<div className="col-md-8 loan-money c-999"><span className="fs-16">20400.00</span></div>
					</li>
					<li className="ui-record-item clearfix col-md-24">
						<div className="col-md-16 txtl">
							<a href="javascript:void(0);"> <span className="fs-14">189******65</span></a><br/><i className="c-999">2018-11-23</i></div>
						<div className="col-md-8 loan-money c-999"><span className="fs-16">50000.00</span></div>
					</li>
				</ul>
				<div>
					<div className="drop-statu-box">别拉了，我也是有底线的~</div>
				</div>
			</div>
		</div>
		)
	}

}
export default connect((state)=>{
    return state
})(Xjilu);;