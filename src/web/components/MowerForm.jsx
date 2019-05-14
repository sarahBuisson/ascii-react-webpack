import React, {Component} from "react";
import {default as actionFactory, createMowerAction} from "../services/actionFactory";
import {connect} from "react-redux";

import {bindActionCreators} from 'redux'

class MowerForm extends Component{



    constructor(){
        super();

        this.state = ({mower: {}})

    }
    changeHandler = (event) => {

        const name = event.target.name;
        const value = event.target.value;
console.log(value )
        this.setState({
            mower: {
                ...this.state.mower,
                [name]:
                    value

            }
        });
    };
    submitHandler = () =>{

        this.props.createMowerAction(this.state.mower);
    };

    render(){
console.log(this.props.submitHandler);
console.log(this.submitHandler);
        return <form onSubmit={this.submitHandler}>
            <div>color:<select name="color" onChange={this.changeHandler} value={this.props.mower.color}>
                <option>Blue</option>
                <option>Red</option>
                <option>Purple</option>
            </select>
            </div>
            <div>mark:<input name="mark" onChange={this.changeHandler} value={this.props.mower.mark}></input>
            </div>   <div>year:<input type='number' name="year" onChange={this.changeHandler} value={this.props.mower.mark}></input>
            </div>
            <input type='submit'/>
        </form>
    }



}


function mapDispatchToProps(dispatch) {
    console.log("mapDispatchToProps")
    return bindActionCreators({... actionFactory}, dispatch)

};

function mapStateToProps(state, ownProps){
    console.log("mapStateToProps")
    return {mower:state?state.mower:{}}
}


export default connect(mapStateToProps, mapDispatchToProps)(MowerForm)

