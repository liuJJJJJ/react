import React, {
    Component
} from "react";
import "./My.css";



import Xheader from '../../components/Xmyheader/Xheader';
import Xmoney from '../../components/Xmoney/Xmoney';
import Xmymian from '../../components/Xmymian/Xmymian';


//import { Route } from "react-router-dom";
class My extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className="container">
                <Xheader />
                <Xmoney/>
                <Xmymian/>
            </div>
                
            
        )
    }
}

export default My;