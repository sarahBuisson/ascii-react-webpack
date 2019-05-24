import {canMove, getNextPosition, getSpritesAt} from "./api";

export let UserActions = {
    MOVE: "MOVE",
    NOTMOVE: "NOTMOVE",
    ACTIVATE: "ACTIVATE",
    SEE: "SEE",//pass the cursor on
    STOPSEE: "STOPSEE",//remove the cursor on

}

export function createActionKey(game,key) {

let direction={x:0,y:0}

   switch (key) {
       case 'ArrowLeft':
           direction.x-=1;
           return createActionMove(game, game.playerSprite, direction)
       case 'ArrowRight'://right
           direction.x+=1;

           return createActionMove(game, game.playerSprite, direction)

           case 'Enter':
           return createActionActivate(game,game.playerSprite, direction)
           break;

   }

return {type: UserActions.NOTMOVE}
}



export function createActionMove(game,sprite, direction) {

    let canvas = game.actifLevel.canvas[0];
    let nextCase = getNextPosition(sprite, direction);
    if (canMove(canvas, nextCase)) {
        return {type: UserActions.MOVE, payload: {sprite,nextPosition:nextCase, direction}}
    }





}

export  function createActionActivate(game,sprite, direction) {

    let nextCase = getNextPosition(sprite, sprite.direction);
    let canva = game.actifLevel.canvas[0];
    let sprites = getSpritesAt(canva, nextCase);
  console.log(sprites)
    if (sprites && sprites[0] && sprites[0].spriteEventId) {

        let event=game.events[sprites[0].spriteEventId]
        if(event && event.condition(game)){
        let gameAfterAction=event.execute(game)
        return {
            type: UserActions.ACTIVATE,
            payload: {gameAfterAction}
        }}
    }
}

export  function createActionSee(message) {
    return {
        type: UserActions.SEE,
        payload: {message}
    }
}

export  function createActionStopSee(message) {
    return {type: UserActions.STOPSEE, payload: {message}}//If the text is differente, it should continue to see
}

export default {createActionMove, createActionActivate, createActionSee, createActionStopSee, createActionKey}
