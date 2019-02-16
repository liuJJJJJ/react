import React, {
    Component
} from "react";
import "./Xroll.js";
import "../../access/app.css";
import { Carousel } from 'antd';
import "../../access/antd.css";
import { connect } from 'react-redux';
import{Link} from 'react-router-dom';
class Xroll extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    // html
    render(){
        return (
            <div className="notice-list row">
                <label className="icon-horn"></label>
                <div className="notice-wrap">
                    <div className="swiper-container">
                              <Carousel vertical="true" autoplay>
                                    <li className="swiper-slide">
                                        <Link  to={'/home'}>关于平台预期年化展示形式优化的通知</Link>
                                    </li>
                                    <li className="swiper-slide">
                                        <Link  to={'/home'}>关于2018年国庆节放假及工作安排的通知</Link>
                                    </li>
                                    <li className="swiper-slide">
                                        <Link  to={'/home'}>关于2018年中秋节放假及工作安排的通知</Link>
                                    </li>
                                    <li className="swiper-slide">
                                        <Link  to={'/home'}>关于泰然金融转让规则调整的通知</Link>
                                    </li>
                                    <li className="swiper-slide">
                                        <Link  to={'/home'}>关于平台u选计划预期年化临时上调下线的通知</Link>
                                    </li>
                                    <li className="swiper-slide">
                                        <Link  to={'/home'}>关于平台预期年化下调的通知</Link>
                                    </li>
                                    <li className="swiper-slide">
                                        <Link  to={'/home'}>关于8月2日实名认证接口升级的通知</Link>
                                    </li>
                                    <li className="swiper-slide">
                                        <Link  to={'/home'}>关于8月1日起平台预期年化调整的通知</Link>
                                    </li>
                                    <li className="swiper-slide">
                                        <Link  to={'/home'}>7月16日数据中心硬件升级的通知</Link>
                                    </li>
                                    <li className="swiper-slide">
                                        <Link  to={'/home'}>关于平台u选计划预期年化临时上调的通知</Link>
                                    </li>
                              </Carousel>
                    </div>
                </div>
            </div>
        )
    }
    // js
        // return{
        //    var swiper = new Swiper('.swiper-container', {
        //       direction: 'vertical',
        //     }) 
        // }
}

export default connect((state)=>{
    return state
})(Xroll);