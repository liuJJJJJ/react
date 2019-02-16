import React, {
    Component
} from "react";
import "./Record.css";


import XrecordHeader from '../../components/XrecordHeader/XrecordHeader';

import Fund from '../Fund/Fund.jsx';
import Sanbiao from '../Sanbiao/Sanbiao.jsx';
import Qita from '../Qita/Qita.jsx';

import { Route } from "react-router-dom";
class Record extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div >
                <XrecordHeader/>
                <Route path="/record/Fund" component={Fund} />
                <Route path="/record/sanbiao" component={Sanbiao} />
                <Route path="/record/qita" component={Qita} />
                
                
            </div> 
        )
    }
}

export default Record;