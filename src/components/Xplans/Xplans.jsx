import React, {
    Component
} from "react";
import "./Xplans.jsx";
import "../../access/app.css";
import { Link } from "react-router-dom";
//import store from "../../libs/store.js";
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Xplans extends Component {
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            list: [],
            isShow:false
        }
    }
    loadMore() {
        console.log(this)

        React.axios.get("plans.json", {
        	
        }).then((response) => {
            console.log(typeof(response.data.list[0].statusStr));
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
                    <div id="10uk3h1fqno" className="swiper-slide activity">
                        <div className="list-wrap rScroll">
                            <ul className="">
                            {(()=>{
                                return this.state.list.map((item,index)=>{
                                    return (
                                        <li className={item.statusStr===0?"plan-pitem false  clearfix":"plan-pitem finish  clearfix"} key={index}>
                                            <Link className="block-link" to={{
										        pathname: `/details/xiangmujieshao/${item.id}`
										        
										        }}></Link>
                                            <div className="row clearfix">
                                                <div className="pro-name col-md-24 clearfix">
                                                    <span className="fs-14 c-999">{item.name}</span>
                                                    <span className="sign nowrap">{item.marketingLabel}</span>
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
                                                            }%</em>
                                                        </span>
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
                                                        <Link className={item.statusStr===0?"purchase-btn":"sold-btn"} to="/detail">{item.buttonName}</Link>
                                                    </div>
                                                    <label className="pro-lab">剩余<em className="c-35">{((item.availAmount)/10000).toFixed(2)}万</em></label>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })
                            })()}
                            </ul>
                            <div className="load-more" ref="wrapper"> 
                                <div className="drop-statu-box" onClick={this.loadMore.bind(this)}>
                                    下拉加载更多
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    

    //下拉加载更多的方法
    componentDidMount() {
    	this.loadMore()
    	
    	
        // 使用滚动时自动加载更多
        const loadMoreFn = this.loadMoreFn
        const that=this
        const wrapper = this.refs.wrapper
        let timeoutId
        function callback() {
            const top = wrapper.getBoundingClientRect().top
            const windowHeight = window.screen.height
            if (top && top < windowHeight) {
                // 证明 wrapper 已经被滚动到暴露在页面可视范围之内了
                loadMoreFn(that)
            }
        }
        window.addEventListener('scroll', function () {
            if (this.props.isShow) {
                return
            }
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
            timeoutId = setTimeout(callback, 50)
        }.bind(this), false);
       
    }
    loadMoreFn(that){
    	
    	that.loadMore()
    }
    
   

    // js
}

export default Xplans;