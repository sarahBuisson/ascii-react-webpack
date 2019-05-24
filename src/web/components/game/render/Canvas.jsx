import React, {Component} from "react";
import Tile from './Tile.jsx'
import Sprite from './Sprite.jsx'
import _ from "lodash";

export default class Canvas extends Component {


    render(){
        let chipset = this.props.content.chipset;
        let tilesRender = _.map(this.props.content.content,
            (row, y) => {

                let resultRow =
                    _.map(row, (tile, x) => {

                        let caseId = 'C' + x + '-' + y

                        return <div key={caseId} className="tile">
                            <Tile content={chipset[tile].render} x={x} y={y}></Tile>

                        </div>


                    });
                return (<div className="gameRow">{resultRow} </div>)
            }
        );
        let spritesRender=_.map(this.props.content.sprites, (s) => {

            let spriteSetElement = this.props.content.spriteSet[s.id];

            console.log(s.position)
            console.log({sw:spriteSetElement.width,cw:chipset.width,sh:spriteSetElement.height,ch:chipset.height});
            let deltaX = ((chipset.width) * s.position.x) - spriteSetElement.width / 2 + chipset.width / 2;
            let deltaY = (chipset.height * s.position.y) + chipset.height - spriteSetElement.height;
            //let deltaX=(chipset.width * s.position.x)
            //let deltaY=(chipset.height * s.position.y)
            console.log(deltaX)
            console.log(deltaY)
            let spriteStyle = {

              //  left: deltaX*12.8+ 'px',//
                left: deltaX*0.8+ 'em',//
                top: deltaY*15+ 'px',
                position: 'absolute',
                "z-index":s.position.y
            };
            console.log(spriteStyle)
            return <Sprite spriteData={s} aspect={spriteSetElement.render}       pstyle={spriteStyle}
            ></Sprite>

        })
        return <div style={{position:'relative'}} class ="asciiArt">
            <div class="sprites" style={{position:'absolute',top:'0px','z-index':100}}>{spritesRender} </div>

            <div class="tiles" style={{position:'absolute',top:'0px'}}>{tilesRender} </div>

        </div>
    }

}

