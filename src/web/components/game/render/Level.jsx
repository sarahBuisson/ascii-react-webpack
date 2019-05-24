import React, {Component} from "react";
import Canvas from './Canvas.jsx'
import _ from 'lodash'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {default as actionFactory} from "../../../services/game/actionFactory";


class Level extends Component {

    handleKey = (event) => {
        console.log("HandleKey"+event.key)
        this.props.createActionKey(this.props.game,event.key)

    };

    render() {
        let canvaView;
        if (this.props.game) {
            let level = this.props.game.actifLevel;
            console.log(level);
            canvaView = _.map(level.canvas,
                (canva) => {
                    return <Canvas content={canva} onKeyDown={this.handleKey} ></Canvas>
                });
        } else
            canvaView = "no level Load";

    console.log(canvaView)
        return <div onKeyDown={this.handleKey} tabIndex="0">{canvaView}
            <div class="message">  {this.props.game.message}</div></div>
    }

}

const mapStateToProps = (state, oldProps)=>{

    return ({game: state?state.game:{}})};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({... actionFactory}, dispatch)

};

export default connect(mapStateToProps, mapDispatchToProps)(Level)
