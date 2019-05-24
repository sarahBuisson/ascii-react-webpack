import React, {Component} from "react";
import LevelEditor from './game/editor/LevelEditor.jsx';
import Level from "./game/render/Level.jsx";
import {Route, Link,BrowserRouter as Router} from "react-router-dom";

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

        return (<Router>
                <Link to="/">Home</Link>
                <Link to="/game">game</Link>
                <Link to="/editor">editor</Link>

                <Route exact path="/home"
                       render={() => "welcome in the home"}
                ></Route>

                <Route exact path="/game"
                       render={() => <Level></Level>}
                ></Route>
                <Route exact path="/editor"
                       render={() => <LevelEditor></LevelEditor>}
                ></Route>
            </Router>
        );
    }
}

export default App;
