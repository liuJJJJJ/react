import React, {
    Component
} from "react";
import "./Xplan.js";
import "../../access/app.css";
import { browserHistory,connect } from 'react-redux';
import {withRouter,Link} from "react-router-dom";

class Xplan extends Component  {
    constructor(props){
        super(props);
        this.state = {
			list:[]
        }
    }
    loadMore() {
    	React.axios.get("https://jrwx.trc.com/proxy/trc_bjcg/plan/list?planType=4%2C5&pageSize=4").then((response) => {
            console.log(response.data.list);
            this.setState({
            	list:this.state.list.concat(response.data.list)        	
            })   
        }).catch(function (error) {
            console.log(error);
        });
    }
    go(index){
    	console.log(this.state.list[index].id)
    	
      	this.props.history.push({ pathname: `/details/xiangmujieshao/${this.state.list[index].id}` });
    }
    // html
    render(){
        return (
            <div className="row trc-product-list-wrap">
			<div className=""></div>
			<div className="trc-product-list-container plan-list-wrap container">
				<h3 className="mod-product-title row">
                        <span className="fs-16">出借计划推荐</span>
                        <span className="ptype-label">长期选择，持有2期后可转</span>
                    </h3>
				<div className="list-container row">
					<ul>
					{(()=>{
                        return this.state.list.map((item,index)=>{
                            return (
                               <li className="plan-pitem false  clearfix" key={index} onClick={this.go.bind(this,index)}>
									<a className="block-link" ></a>
									<div className="row clearfix">
										<div className="pro-name col-md-24 clearfix">
											<span className="fs-14 c-999">{item.name}</span>
										</div>
										<div className="col-md-9">
											<div className="pro-val">
												<span className="fs-26 c-f63">{parseInt(item.baseRate)}<em className="fs-16">.{
													(()=>{
														var num=item.baseRate.toFixed(2);
														var str=num.toString()
														var arrs=str.split(".")
		                    							return arrs[1]
		                							})()
												}%</em></span>
											</div>
											<label className="pro-lab"><span> </span></label>
										</div>
										<div className="col-md-7">
											<div className="pro-val">
												<span className="fs-18">{item.termName}</span>
											</div>
											<div className="pro-lab nowrap">
												{item.repayMethodName}
											</div>
										</div>
										<div className="col-md-8 txtr">
											<div className="pro-val">
												<Link className="purchase-btn" to={ '/home'}>抢购</Link>
											</div>
											<label className="pro-lab">剩余<em className="c-35">{((item.availAmount)/10000).toFixed(2)}万</em></label>
										</div>
									</div>
								</li>
                            )
                        })
                    })()}             
					</ul>
				</div>
			</div>
		</div>
        )
    }
    componentDidMount(){
    	 this.loadMore()
    }
   
}

export default withRouter( Xplan );