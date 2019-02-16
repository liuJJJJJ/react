import React, {
	Component
} from 'react';
import './Xfooter.css';
import { Link} from "react-router-dom";
class Xfooter extends Component {
	constructor(props){
		super(props);
		this.state = {
			tab:0,
            tabs:[{
                title:"首页",
                href:"/terran/home",
                className:"nav-home",
                
            },{
                title:"出借",
                href:"/terran/contact/",
                className:"nav-invest",
                
            },{
                title:"我的",
                href:"/terran/my",
                className:"nav-user",
                
            }]         
		}
	}
	toggleTab(index,e){
        this.setState({
            tab:index
        })
    }
	render() {
		return(

				<div className="ui-module-bottom_navBar container">
					<ul className="clearfix">
					 {(()=>{
                        return this.state.tabs.map((item,index)=>{
                            return(
                               	<li className="col-md-8 item" onClick={this.toggleTab.bind(this,index)} key={index} >
									<Link className={this.state.tab===index?"active":""} aria-current={this.state.tab===index?"page":""} to={item.href}>
										<span  className={`nav-icon ${item.className}`}></span>
									</Link>
								</li>
                            )
                        })
                    })()}
						
					</ul>
				</div>

		)
	}

}
export default Xfooter;