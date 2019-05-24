import React, {Component} from "react";
import '../level.css';
import {bindActionCreators} from "redux";
import {default as actionFactory} from "../../../services/game/actionFactory";
import {connect} from "react-redux";

class Sprite extends Component {


    handleEnter=()=>{

        console.log(this.props.content)
        this.props.createActionSee(this.props.spriteData.description);
    }
    handleLeave=()=>{
        this.props.createActionStopSee(this.props.spriteData.description);
    }

    render(){
        let result = this.props.aspect;
        _.forEach(this.props.spriteData.transforms, (transform) => {
            let newResult;
            switch (transform) {
                case 'invert':
                    newResult = result.split("").reverse().join("").replaceAll("p", "b")
                    break;
                case 'move':
                    newResult = result.replace("\n", "\n ")
                    break;
                default:
                    newResult = result;
            }
            result = newResult
        });



        return <div className="sprite" onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}
                    style={this.props.pstyle}
                    ss={this.props.spriteData.position.x + " " + this.props.spriteData.position.y}>
            <span class="inner" style={{position: 'relative', bottom: '0px'}}>{result}</span>
        </div>
    }

}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({... actionFactory}, dispatch)

};

function mapStateToProps(state, ownProps){
    console.log(state)
    return ownProps //{content:state?state.content:{}}
}

export default connect(mapStateToProps, mapDispatchToProps)(Sprite)

