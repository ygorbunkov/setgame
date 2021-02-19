import { ActionType } from './actionType'
import { Action } from './action'

import defaultState from './defaultState.json'

export interface AppState {
    appIsReady: true
}

export const reducer = (action: Action, state: typeof defaultState) => {
    switch(action.type){
        case ActionType.APP_IS_READY : {
            return {...state, appIsReady: true}
        }
        default: return state
    }
}