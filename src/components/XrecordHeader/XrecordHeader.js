import React, {Component} from 'react';
import '../../pages/Fund/Fund.css';
import './XrecordHeader.css';

import { Link} from "react-router-dom";
class XrecordHeader extends Component {
	constructor(props){
		super(props);
		this.state = {
			bull:[{
				title:"出借计划",
				href:'Fund'
			},{
				title:"散标项目",
				href:'sanbiao'
			},{
				title:"精选项目",
				href:"sanbiao"
			},{
				title:"其他项目",
				href:"qita"
			}],
			tab:0,
		}
	}
	xuanze(index,e){
		this.setState({
			tab:index
		})
		
	}
	render() {
		return(
			<div className="trc-invest-list-wrap swiper-subassembly">
				<div className="swiper-tab">
					<ul className="clearfix swiper-pagination-clickable swiper-pagination-bullets">
						{(()=>{
                    return this.state.bull.map((item,index)=>{
                    	return(
                        <li className={this.state.tab===index?"bullet activity":"bullet"} onClick={this.xuanze.bind(this,index)} key={index}>
                        	<Link to={`/record/${item.href}`}>{item.title}</Link>
                        </li>
                       )
                    })
                })()}
					
					</ul>
				</div>
			</div>
		)
	}

}
export default XrecordHeader;