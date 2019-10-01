
import { combineReducers } from 'redux'
// import todoReducer from '../todo/todoReducer'

const rootReducer = combineReducers({
    // todo: todoReducer
    todo: () => ({
        description: 'princ 1',
        list: [{
            _id: 1,
            description: 'tarefa 1',
            done:true
        },
        {
            _id: 2,
            description: 'tarefa 2',
            done:false
        },    
        {
            _id: 3,
            description: 'tarefa 3',
            done:false
        }]
    })
})

export default rootReducer