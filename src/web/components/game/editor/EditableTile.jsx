import React,{Component} from 'React';

class EditableTiles extends Component {

    handleMouseEnter(x, y) {
        return () => {
            if (this.state.mouseDown) {
                let newState = {...this.state}
                newState.content[y][x] = this.state.selectedTilesId;
                this.setState(newState);
            }
        }
    }
    render(){
        return <div onMouseEnter={this.handleMouseEnter(this.props.x,this.props.y)}><Tile content={this.props.content}></Tile></div>
    }

}

