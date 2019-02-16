import React, {
	Component
} from 'react';
import './Xheader.css';
import { Link } from "react-router-dom";
class Xheader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username:"",
			isShow:false,
			
		};
		this.xuanran();
	}
	getCookie(cname) {
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for(var i = 0; i < ca.length; i++) {
			var c = ca[i].trim();
			if(c.indexOf(name) == 0) return c.substring(name.length, c.length);
		}
		return "";
	}
	xuanran() {
		var pwd = this.getCookie("password");
		var name = this.getCookie("name");
		this.state.username=name;
		
		if(name == "" || name == undefined){

		}else{
          this.state.isShow=!this.state.isShow
		}
	}

	render() {
		return(
			<div className="page-my-wrap">
				<div className="row ui-profile-module">
					<div className="col-md-24 clearfix">
						<div className="col-md-16 profile nowrap">
							<div className="head left">
								<Link to={this.state.isShow?"/profile" : "/login"}>
									<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAABiCAMAAACce/Y8AAAAnFBMVEUAAADg4ODu7u7i4uLu7u7u7u7u7u7u7u7u7u7n5+fu7u7u7u7u7u7FxcXu7u7FxcXFxcXu7u7u7u7FxcXu7u7FxcXu7u7u7u7FxcXu7u7Hx8fFxcXFxcXFxcXFxcXu7u7FxcXu7u7FxcXFxcXFxcXc3Nzu7u7FxcX09PSqqqre3t6np6fp6enT09O2trbk5OTKysq+vr7Y2NjOzs5qFycxAAAAJnRSTlMAB+0PhfTR22IXNSai8cOmhX1d0si6q3BgjTco6d3Ht3lWVo5t00P0r9EAAAQ2SURBVGjetJXNsqIwEIVjkB+RskrL0nJ1y82BpEkk+v7vNpQOg3JJE9H5Vr2Rz0MnBxFIlO+Wh30qY8QyTTaH5S6PxPdYZUWKEdIiW4kvsN4mYEi2a/ERi2yDSTbZYrYgOkoEIY/RPMFWIhi5nSHJJN5CZm8K8j3eZp+/s+VTjBnEp+C9rxPMJAk8wecYs4nPIYYlPmI5vYYCH1IsJgw/YKi10caYq9E1/PwsWAPTF9o4peiBUvam/Y2ymJVBO3V/9p3H6K4zchRegSVSQ4isT1KEnSXdT2UvGEjKy1vn6owXXPdzo0j5IOVZyXn0TscDBZG9NaVxXQRfkBojxOuRVQ9boyRFdxQPOYyR/F75CQMMqTDIjS7kNDTkGHJlFEE5cuY1cSnmv6rjSFuoDxU4Phsiid+44GVYjCKjqQLXEwoi6hT15AVcxUB4jL4+HPGKeMWHAC5EjMCg0kS9go2xkBhHjzvoIWixEwrZHaod8IbjUePVHU3EKpCJB9x3SL1IqMU2l+ofbkKx+dt/8FOhsdSjbKNRPVErYhV4tOGWU1QVdONsi3M3XVdDDBGr2N4VCafoQOWh5BXJ/VKAU0wCR5wCq1aRsYppYFlF1iqKuYp+5ZyiaBUpqwhylPCTChHBS90reMARiRyM40VhSt2NMOUl1JH726MepLgRqe65TTvjWcEsYyeWTIYXhSVF5mnWzwrGsRQHxlBjcI8v/WwHKbyOg9iHpqiuTf/HtXmtKvhz7EXK74IhMEUqJBgHpwhNIUXsN+ArKWKB/50Cf1qxo93EYSAKoGPCLqVVmqhpu1ECCEHXV7JixQr//2/bbaMaK/bgBB8hXni4ukNi2SYZ+3Zza4sN8KBfsU9Ur1xuC25QK8mIjZCMFW1iI7pwhORs6HVei2H8xEe80rtkuRHDghbvtI6OWDioNb3ERkj1yTbp+QTrhR7lzEmN39c/SM4jZXJGDatzVg9ORjeeWuVm2ARLsS02tzY5GoOz2o3/g/O+ANCK3eQ8MBUMgN5dUj+5S5fBF92Ht2pbpsJ/hl9uNUaBKltm29wbfDNdOEBqXLlMm/xmNv8KP4wKJlzg0p138/8UGpKl/cNSBhPKd4Sh5/CQbJFJiFS2QnBaz6HjpMKU0er6RNMPBiOuyEPgUDwgwOjRBRz7j6yE/2ivcTczDmvtvaDoDFJQzgWFU0MZIFnG2ndZpJCMkqvMc+U1IB0j/3gu7hRS+ium1489kmo8l6gGKZ09V8EKKVWCJp4uSChvyeOEhE7kVSKZkgIKJFJQiHhDEm+CmIykCekzbAJLFLhTIeiWMsmzxDvlWCw/UZS2wkJVS5HEGYucBcVrqgUVGppFfOSYJf8QNFdW7hBtV2a0RHbcRQYcM1pK1AfcdKgF3aU9VmBUx5YS2NbFHh77ot5SOllTl8Vhn+dAnu8PRVk3sfP/B6QrePViDr0XAAAAAElFTkSuQmCC"/>
								</Link>
							</div>
							<div className="nickname nowrap">
								<span>{this.state.isShow?this.state.username : "请登录"}</span><br/>
								<i>我的账户</i>
							</div>
						</div>
						<div className="col-md-8 tool">
							<Link to="/login"><span className="tool-item message">消息</span></Link>
							<Link to={this.state.isShow?"/profile" : "/login"}><span className="tool-item setting">设置</span></Link>
						</div>
					</div>
				</div>
			</div>

		)
	}

}
export default Xheader;