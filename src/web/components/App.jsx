import React, {Component} from "react";
import LevelEditor from './game/editor/LevelEditor.jsx';
import Level from "./game/render/Level.jsx";

class App extends Component {
    constructor() {
        super();
        this.state = {
            mowers: null
        };
    }


    componentDidMount() {

    }

    render() {

        return (<div>
                <Level></Level>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

                <div style={{width:"4.5em","line-height":"1.5em", "letter-spacing": "0.2em"}}>uuY<br/>UU<br/>UU</div>
                <div style={{width:"1em",height:"1em", "line-height":"1em"}}>X</div>
                <LevelEditor></LevelEditor>

            </div>
        );
    }
}

export default App;
