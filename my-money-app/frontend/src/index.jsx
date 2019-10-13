import React from 'react'
import ReactDOM from 'react-dom'
import App from './main/app'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

// import Routes from './main/routes'
import reducers from './main/reducers'

// const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
//       && window.__REDUX_DEVTOOLS_EXTENSION__()
// const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools)
// ReactDOM.render(
//     <Provider store={store}>
//         <Routes />
//     </Provider>
// , document.getElementById('app'))

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
      && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools)
/*
applyMiddelware retorna uma função
onde o parâmetro é createStore
onde o retorno de tudo isso é a função reducers

*/
ReactDOM.render(

    <Provider store={store}>
        <App />
    </Provider>

, document.getElementById('app'))