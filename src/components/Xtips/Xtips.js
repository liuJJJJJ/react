import React, {
    Component
} from "react";
import "./Xtips.js";
import "../../access/app.css";
import { connect } from 'react-redux';

class Xtips extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    // html
    render(){
        return (
            <div className="risk-tips"><span>-市场有风险，出借需谨慎-</span></div>
        )
    }
    // js
}

export default connect((state)=>{
    return state
})(Xtips);