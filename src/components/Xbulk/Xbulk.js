import React, {
    Component
} from "react";
import "./Xbulk.js";
import "../../access/app.css";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import store from "../../libs/store.js";
class Xbulk extends Component {
    constructor(props){
        super(props);
        this.state = {
            list:[]
        }
    }
    loadMore() {
        console.log(this)

        React.axios.get("bulk.json", {
        }).then((response) => {
            console.log(response.data.list);
            this.setState({
                list: this.state.list.concat(response.data.list)
            })
        }).catch(function (error) {
            console.log(error);
        });
    }
    // html
    render(){
        return (
            <div className="swiper-container swiper-container-horizontal">
                <div className="swiper-wrapper clearfinx">
                    <div id="lu55p8bfeh8" className="swiper-slide next">
                        <div className="list-wrap rScroll">
                            <ul className="">
                                {(()=>{
                                    return this.state.list.map((item,index)=>{
                                        return(
                                            <li className="loan-pitem finish clearfix" key={index}><Link className="block-link" to={{
										        pathname: `/details/xiangmujieshao/${item.id}`
										        
										        }}></Link>
                                                <div className="row clearfix">
                                                    <div className="pro-name col-md-24 clearfix">
                                                        <span className="fs-14 c-666">{item.loanTitle}</span>
                                                        <label className="statu right">还款中</label>
                                                    </div>
                                                    <div className="col-md-10">
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
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="pro-val">
                                                            <span className="fs-16">{item.termName}</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8 txtr">
                                                        <div className="pro-val">
                                                            <span className="fs-16">{((item.loanShare)/10000).toFixed(2)}万</span>
                                                        </div>
                                                    </div>
                                                    <div className="progress clearfix">
                                                        <div className="bar-inner"></div>
                                                        <span className="num">100%</span>
                                                    </div>
                                                    <div className="col-md-24 other">
                                                        <span>{item.repayMethodName}</span>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })
                                })()}
                                
                            </ul>           
                            <div> 
                                <div className="drop-statu-box">
                                    下拉加载更多
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        store.on("inputValue",(data)=>{
            console.log(data);
            this.setState({
                inputValue:data
            })
        })
        this.loadMore()
    }
    // js
}

export default connect((state)=>{
    return state
})(Xbulk);