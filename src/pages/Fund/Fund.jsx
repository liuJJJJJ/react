import React, {
	Component
} from 'react';
import './Fund.css';
import img from '../../access/logo.png';
import { Link} from "react-router-dom";
class Fund extends Component {
	constructor(props){
		super(props);
		this.state = {
			
		};
	}
	render() {
		return(
				<div id="app" className="page-wrap">
					<div className="list-type-1" style={{height:"667px"}}>
						<div id="tlu6tj2m1bg" className="container fund-list-wrap">
							<div className="list-wrap rScroll">
								<div className="empty-page">
									<div className="empty-icon bill"></div>
									<h4>暂无相关消息</h4>
									<p></p>
									<div className="empty-btns-wrap"></div>
								</div>
								
							</div>
						</div>
					</div>
					
				</div>
		)
	}
	
}
export default Fund;