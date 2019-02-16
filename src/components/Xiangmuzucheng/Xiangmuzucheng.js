import React, {
	Component
} from 'react';
import { connect } from 'react-redux';	
import { Link } from "react-router-dom";
class Xiangmuzucheng extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		};
		
	}
	
	render() {
		return(
				<div id="o1dfrgvgt68" className="swiper-slide activity" style={{width: "375px"}}>
					<div className="list-wrap rScroll">
						<div className="empty-page">
							<div className="empty-icon bill"></div>
							<h4>暂无项目组成</h4>
							<p></p>
							<div className="empty-btns-wrap"></div>
						</div>
					</div>
				</div>
						
		)
	}

}
export default connect((state)=>{
    return state
})(Xiangmuzucheng);;