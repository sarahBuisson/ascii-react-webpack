import * as api from './api.js'

let nextTodoId = 0;


export const ActionTypes={
    CREATE_MOWER: 'CREATE_MOWER',
    CREATE_MOWER_PENDING: 'CREATE_MOWER_PENDING',
    CREATE_MOWER_ERROR: 'CREATE_MOWER_ERROR'



}

export function createMowerAction(mower) {

 return    async (dispatch, getState) => {
        dispatch({type: ActionTypes.CREATE_MOWER_PENDING})
        let res = await api.putMower(mower).catch((e)=>{
console.log("ERRORR")
            console.error(e)
            return  dispatch({type: ActionTypes.CREATE_MOWER_ERROR});
        })
        return dispatch({type: ActionTypes.CREATE_MOWER});
    };

    console.log("createMowerAction")
    return api.putMower(mower).then(()=>{

      return   {
            type: ActionTypes.CREATE_MOWER,
                id: nextTodoId++, payload: mower
        }
    })
}


export function simpleActionAction(mower) {
    return {
        type: "SIMPLE",
        id: nextTodoId++,
        payload: mower
    }

}


export default {createMowerAction}
