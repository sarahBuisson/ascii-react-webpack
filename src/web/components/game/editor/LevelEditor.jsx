import React, {Component} from "react";
import _ from 'lodash'

import '../level.css';

export default class LevelEditor extends Component {


    constructor() {
        super();

        this.state = ({
            chipset: {
                0: {render:'    \n    \n    ', pass:true},
                1: {render:'--- \n=== \n--- ',pass:false},
                2: {render:'--- \nxxx \n--- ',pass:false},
                4: {render:'--- \nxxx \nxxx ',pass:false},
                3: {render:'VVV \nHHH \n--- ',pass:false}
            },
            selectedTilesId: 0,


            content: [[1, 0, 0, 0], [2, 0, 0, 0], [4, 4, 4, 4]]
        })

    }

    selectTileType(tileTypeId) {
        return () => {
            this.setState({...this.state, selectedTilesId: tileTypeId})
        }

    }

    handleMouseEnter(x, y) {
        return () => {
            if (this.state.mouseDown) {
                let newState = {...this.state}
                newState.content[y][x] = this.state.selectedTilesId;
                this.setState(newState);
            }
        }
    }

    handleMouseDown() {
        return () => {this.setState({...this.state, mouseDown: true})}
    }

    handleMouseUp() {
            return () => {this.setState({...this.state, mouseDown: false})}
    }

    render() {

        let chipsetMap = _.map(
            this.state.chipset, (tile, id) => {
                let chipId = 'chip' + id;
                return <div key={chipId} onClick={this.selectTileType(id)} className="tile">
                    <pre>{tile.render}</pre>
                </div>

            });
        let chipset = _.values(chipsetMap)
        let result = _.map(this.state.content,
            (row, y) => {

                let resultRow =
                    _.map(row, (tile, x) => {
                        let caseId = 'C' + x + '-' + y
                        return <div key={caseId} className="tile" onMouseEnter={this.handleMouseEnter(x,y)}>
                            <pre>{this.state.chipset[tile].render}</pre>
                        </div>


                    });
                return (<div>{resultRow} </div>)
            }
        );

        return (
            <div onMouseDown={this.handleMouseDown()} onMouseUp={this.handleMouseUp()}>
                <div>
                    chipset:
                    <div>{chipset}</div>

                </div>
                result:
                <div>{result}</div>
            </div>)


    }

}

