export function numberReducer(state=1,action){
    switch (action?.type){
        case 'ADD':
            return state + 1
        case 'DEL':
            return state - 1
        default:
            return  state
    }
}

export function infoReducer(state={},action){
    const { payLoad = {} } = action
    switch (action?.type){
        case 'SET':
            return {
                ...state,
                ...payLoad,
            }
        default:
            return state
    }
}