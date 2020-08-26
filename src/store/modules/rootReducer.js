import {combineReducers} from 'redux'

import auth from './auth/reducer'
import navers from './navers/reducer'

export default combineReducers({
    auth,
    navers
})