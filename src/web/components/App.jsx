import React, {Component} from "react";
import MowerForm from './MowerForm.jsx'
import _ from 'lodash'

import * as service from '../services/api.js'

class App extends Component {
    constructor() {
        super();
        this.state = {
            mowers: null
        };
    }


    componentDidMount() {
        service.getMowers().then((response, c) => {
            this.setState({

                mowers: response.data
            });
        })
    }

    render() {
        let listMowers = "no mower found";
        if (this.state.mowers)
            listMowers = _.map(this.state.mowers, (mower,i) =>
                // Correct! Key should be specified inside the array.
                <li key={i}>mower:{mower.mark} {mower.color}</li>
            );

        return (<div>
                <div>My Mower App</div>

                all my mower:


                <ul>{listMowers}</ul>

                <MowerForm></MowerForm>
            </div>
        );
    }
}

export default App;
