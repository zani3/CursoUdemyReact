const INITIAL_STATE = {
    description: 'princ 10',
    list: [{
        _id: 1,
        description: 'tarefa 1',
        done: true
    },
    {
        _id: 2,
        description: 'tarefa 2',
        done: false
    },
    {
        _id: 3,
        description: 'tarefa 3',
        done: false
    }]
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'DESCRIPTION_CHANGED':
            return {...state, description: action.payload}
        default:
            return state
    }
}