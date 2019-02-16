import React, {
    Component
} from "react";
import "./Contact.jsx";
// import "../../access/webStatistics.css";
import Xtips from "../../components/Xtips/Xtips.js";
import Xtab from "../../components/Xtab/Xtab.js";
import Xplans from '../../components/Xplans/Xplans.jsx';
import Xbulk from '../../components/Xbulk/Xbulk.js';
import Xtransfer from '../../components/Xtransfer/Xtransfer.js';
import { Route } from "react-router-dom";
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return(
            <div className="trc-product-list-wrap">
                <Xtips/>
                <div className="swiper-subassembly">
                    <Xtab/>
                    <Route path="/terran/contact/" exact component={Xplans} />
                    <Route path="/terran/contact/plans" component={Xplans} />
                    <Route path="/terran/contact/bulk" component={Xbulk} />
                    <Route path="/terran/contact/transfer" component={Xtransfer} />
                </div>
            </div>
        )
    }
}

export default Contact;