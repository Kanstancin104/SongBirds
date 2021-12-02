export const setApplicationState = (actionType, data)=>{
    const action = {
        type:actionType,
        payload:data
    }
    return action
}