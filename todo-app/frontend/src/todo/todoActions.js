import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export const changeDescription = (event) => (
    {
        type: 'DESCRIPTION_CHANGED',
        payload: event.target.value
    }
)

export const search = (description) => {
    return (dispatch, getState) => {
        const description = getState().todo.description
        const search = description ? `&description__regex=/${description}/` : ''
        const request = axios.get(`${URL}?sort=-createAt${search}`)
            .then(resp => dispatch({type: 'TODO_SEARCHED', payload: resp.data}))
    }
}


// export const search = (description) => {
//     const search = description ? `&description__regex=/${description}/` : ''
//     const request = axios.get(`${URL}?sort=-createAt${search}`)
//     return {
//         type: 'TODO_SEARCHED',
//         payload: request
//     }
// }

// export const add = (description) => {
//     const request = axios.post(URL, { description })
//     return [{
//         type: 'TODO_ADDED',
//         payload: request
//     },
//     search()
//     ]
// }

export const add = (description) => {
    return dispach => {
        axios.post(URL, { description })
            .then(resp => dispach(clear()))
            .then(resp => dispach(search()))
    }
}

export const markAsDone = (todo) => {
    return dispach => {
        axios.put(`${URL}/${todo._id}`, {...todo, done: true})
            .then(resp => dispach(search()))
    }
}


export const markAsPending = (todo) => {
    return dispach => {
        axios.put(`${URL}/${todo._id}`, {...todo, done: false})
            .then(resp => dispach(search()))
    }
}

export const remove = (todo) => {
    return dispach => {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => dispach(search()))
    }
}

export const clear = () => {
    return [{type: 'TODO_CLEAR'}, search()]
}