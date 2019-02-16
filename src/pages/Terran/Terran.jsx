import React, {
    Component
} from "react";

import My from '../My/My.jsx';
import Home from '../Home/Home.jsx';
import Contact from '../Contact/Contact.jsx';
import Xfooter from '../../components/Xfooter/Xfooter';

import { Route } from "react-router-dom";
class Terran extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
				<Route path="/" exact component={Home} />
            	<Route path="/terran/home" component={Home} />
                <Route path="/terran/my" component={My} />
                <Route path="/terran/contact" component={Contact} />
                
                <Xfooter/>
            </div>
                
            
        )
    }
}

export default Terran;