import React, {
    Component
} from "react";
import "./Home.jsx";
// import "../../assets/swiper.js";
import Xheader from '../../components/Xheader/Xheader.js';
import Xlist from '../../components/Xlist/Xlist.js';
import Xroll from '../../components/Xroll/Xroll.js';
import Xbanner from '../../components/Xbanner/Xbanner.js';
import Xplan from '../../components/Xplan/Xplan.js';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className="container page-index">
                <Xheader/>
                <Xlist/>
                <Xroll/>
                <Xbanner/>
                <Xplan/>
                <div className="index-foot-bar"> </div>
            </div>
        )
    }
}

export default Home;