import React, {
    Component
} from "react";
import "./Xbanner.js";
import "../../access/app.css";
import { Carousel } from 'antd';
import "../../access/antd.css";
import banner1 from "../../access/banner1.png";
import banner2 from "../../access/banner2.png";
import banner3 from "../../access/banner3.png";
import { connect } from 'react-redux';
import{Link} from 'react-router-dom';
class Xbanner extends Component {
    constructor(props){
        super(props);
        this.state = {
			arr:[{
				classname:"swiper-slide swiper-slide-duplicate",
				datas:2,
				href:"/terran/home",
				src:banner1,
				title:"前往APP发现更多，点我立即下载",
				alt:"前往APP发现更多，点我立即下载"
			},{
				classname:"swiper-slide ",
				datas:0,
				href:"/terran/home",
				src:banner2,
				title:"前往APP发现更多，点我立即下载",
				alt:"前往APP发现更多，点我立即下载"
			},{
				classname:"swiper-slide ",
				datas:1,
				href:"/terran/home",
				src:banner3,
				title:"前往APP发现更多，点我立即下载",
				alt:"前往APP发现更多，点我立即下载"
			}]
        }
    }
    // html
    render(){
        return (
            <div className="trc-slide-banner-wrap row">
                <div className="swiper-container swiper-container-horizontal">
                    <Carousel autoplay>
                    	{(()=>{
		                    return this.state.arr.map((item,index)=>{
		                    	return(
		                        <li className={item.classname} data-swiper-slide-index={item.datas} key={index}>
		                            <Link  to={item.href}>
		                                <img src={item.src} title={item.title} alt={item.alt}/>
		                            </Link>
		                        </li>)
		                    })
		                })()} 
                    </Carousel>
                </div>
            </div>
        )
    }
    // js
    
}

export default connect((state)=>{
    return state
})(Xbanner);
