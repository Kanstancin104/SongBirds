export const setApplicationState = (actionType, data)=>{
    const action = {
        type:actionType,
        payload:data
    }
    console.log(action)
    return action
}

export const setApplicationScore = (actionType, data)=>{
    const action = {
        type:actionType,
        payload:data
    }
    console.log(action)
    return action
}