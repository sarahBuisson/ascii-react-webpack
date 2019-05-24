
import {UserActions} from "../services/game/actionFactory";

export default function reducer(oldState,action){
switch (action.type) {
    case UserActions.SEE:
        console.log(action)
        return {...oldState, game:{...oldState.game, message:action.payload.message}}

    case UserActions.STOPSEE:

        if (oldState.game.message == action.payload.message) {
            return {...oldState, game: {...oldState.game, message: ""}}
        }
        else break;


    case UserActions.MOVE:

        oldState.game.playerSprite.position = action.payload.nextPosition;
        oldState.game.playerSprite.direction = action.payload.direction;
        return {...oldState, game:{...oldState.game}};

    case UserActions.ACTIVATE:
        console.log(action.payload)
            return {...oldState, game:action.payload.gameAfterAction}



}


    return {...oldState}


}
