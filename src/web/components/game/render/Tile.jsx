import React, {Component} from "react";
import '../level.css';
export default class Tile extends Component {


    render(){
        return <div class="inner" >
            {this.props.content}
        </div>
    }

}

