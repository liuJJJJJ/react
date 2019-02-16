import React, {
	Component
} from 'react';

import Xdheader from '../../components/Xdheader/Xdheader.jsx';
import { Route,Link} from "react-router-dom";
import Xiangmuzucheng from '../../components/Xiangmuzucheng/Xiangmuzucheng.js';
import Xiangmujieshao from '../../components/Xiangmujieshao/Xiangmujieshao.js';
import Xjilu from '../../components/Xjilu/Xjilu.js';
class Details extends Component {
	constructor(props){
		super(props);
		this.state = {
			xiangmu:[{
				title:"项目介绍",
				href:"/detail/xiangmujieshao"
			},{
				title:"项目组成",
				href:""
			},{
				title:"出借记录",
				href:""
			}],
			tab:0
		};
		
	}
	
	huoqu(){
		var id=this.props.history.location.pathname.slice(-32)
		console.log(id)
		console.log(this.state.list)
	}
	xuanze(index,e){
		this.setState({
			tab:index
		})
		if(index==0){
		this.props.history.push('/details/xiangmujieshao')
		}else if(index==1){
		this.props.history.push('/details/xiangmuzucheng')
		}else if(index==2){
		this.props.history.push('/details/jilu')
		}

	}
	
	render() {
		return(
				<div className="page-loan-detail">
					<Xdheader/>
					<div className="products-info-wrap">
						<div >
							<div className=" swiper-subassembly">
								<div className="swiper-tab">
									<ul className="clearfix swiper-pagination-clickable swiper-pagination-bullets">
										
										{(()=>{
											return this.state.xiangmu.map((item,index)=>{
												return (
													<li className={this.state.tab===index?"bullet activity":"bullet"}  key={index} onClick={this.xuanze.bind(this,index)}>{item.title}</li>
												)
											})
										})()}
									</ul>
								</div>
								
								<Route path="/details/xiangmujieshao" component={Xiangmujieshao} />
                				<Route path="/details/xiangmuzucheng" component={Xiangmuzucheng} />
                				<Route path="/details/jilu" component={Xjilu} />
                				
							</div>
						</div>
					</div>
                	
                	
					
					
			
					<div className="suspend-nav-wrap">
						<div className="suspend-nav-container">
							<ul>
								<li className="nav-item transition home">
									<Link to="/terran/home"><span className="icon">首页</span></Link>
								</li>
								<li className="nav-item transition calculator">
									<a href="https://jrhelp.trc.com/calculator/trc_calculator_h5?yearRate=11.10&amp;repayMethod=1&amp;term=0&amp;termMonth=24">
										<span className="icon"></span>
									</a>
								</li>
								<li className="nav-item transition backtop" style={{display:" none"}}><span className="icon">顶部</span></li>
							</ul>
						</div>
					</div>
					<div className="container mod-purchase-bar">
						<div className="row orange-bar">
							<div className="col-md-24">
								<Link className="block-link" to="/Xshenfen"></Link><span>请先实名认证</span></div>
						</div>
					</div>
				</div>
		)
	}
	componentDidMount(){
    	 this.huoqu()
    }
}
export default Details;