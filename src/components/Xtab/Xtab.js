import React, {
    Component
} from "react";
import "./Xtab.js";
import "../../access/app.css";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

class Xtab extends Component {
    constructor(props){
        super(props);
        this.state = {
            tab:0,
            tabs:[{
                title:"计划列表",
                href:"plans",
                dot:false
            },{
                title:"散标列表",
                href:"bulk",
                dot:false
            },{
                title:"转让列表",
                href:"transfer",
                dot:true
            }]
        }
    }

    toggleTab(index,e){
        this.setState({
            tab:index
        })
    }
    // html
    render(){
        return (
            <div className="swiper-tab">
                <ul className="clearfix swiper-pagination-clickable swiper-pagination-bullets">
                    {(()=>{
                        return this.state.tabs.map((item,index)=>{
                            return(
                                <li onClick={this.toggleTab.bind(this,index)} key={index} className={this.state.tab===index?"bullet activity":"bullet"}>
                                <Link to={`/terran/contact/${item.href}`}>
                                    {item.title}
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
})(Xtab);