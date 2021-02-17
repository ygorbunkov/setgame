import { ActionType } from './actionType'

export interface Action {
    type: ActionType,
    payload?: unknown
}

export const setAppIsReady = (): Action => ({
    type: ActionType.APP_IS_READY
})

