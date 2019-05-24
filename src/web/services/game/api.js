
import _ from 'lodash'
export function canMove(canvas, nextCase) {
    let chipId = canvas.content[nextCase.x] ? canvas.content[nextCase.x][nextCase.y] : null;
    if (chipId && canvas.chipset[chipId].block) {
        return false;
    }

    return true;
}

export let getNextPosition = function (sprite, direction) {
    return {x: sprite.position.x + direction.x, y: sprite.position.y + direction.y};
};



export let getSpritesAt = function (canva, position) {
console.log(canva)
    return _.filter(_.values(canva.sprites),(s)=>(s.position.x==position.x&&s.position.y==position.y))
};

export let loadLevel=(game,levelId)=>{
    game.actifLevel={...game.levels[levelId]};
    game.playerSprite =
        {
            id: 1,
            positionType: {bottomy: "relative"},
            position: {x: 3, y: 3},
            description: "you"
        };
    game.actifLevel.canvas[0].sprites.push( game.playerSprite)
};
