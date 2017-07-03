
import React from 'react'
import App from './entry.js'
import ReactDOM from 'react-dom'
import {List} from 'immutable'
if (module.hot) module.hot.accept()

ReactDOM.render(
    <App /> ,document.getElementById('container')
)
