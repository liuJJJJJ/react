import React, {
    Component
} from "react";
import "./Xlist.js";
import "../../access/app.css";
//import img1 from "../../access/0_1.png";
//import img2 from "../../access/0_2.png";
//import img3 from "../../access/0_3.png";
//import img4 from "../../access/0_4.png";
//import img5 from "../../access/0_5.png";
import { connect } from 'react-redux';
import{Link} from 'react-router-dom';
class Xlist extends Component {
    constructor(props){
        super(props);
        this.state = {
			arr:[{
				title:'小泰社区',
				href:"/home",
				bg:"ui-icon-item aaaa1"
			},{
				title:'新手必读',
				href:"/home",
				bg:"ui-icon-item aaaa2"
			},{
				title:'运营报告',
				href:"/home",
				bg:"ui-icon-item aaaa3"
			},{
				title:'信息披露',
				href:"/home",
				bg:"ui-icon-item aaaa4"
			},{
				title:'小泰微课',
				href:"/home",
				bg:"ui-icon-item aaaa5"
			},]
        }
    }
    // html
    render(){
        return (
            <div className="row enter-list">
                <ul className="clearfix">
                    
                    {(()=>{
		                    return this.state.arr.map((item,index)=>{
		                    	return(
		                    		<li key={index}>
				                        <Link to={item.href}>
				                            <div className="enter-icon">
				                                <div className={item.bg} ></div>
				                            </div>
				                            <span>{item.title}</span>
				                        </Link>
				                    </li>
		                       )
		                    })
		                })()} 
                </ul>
            </div>
        )
    }
    // js
}

export default connect((state)=>{
    return state
})(Xlist);