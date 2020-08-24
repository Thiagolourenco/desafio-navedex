import { all } from 'redux-saga/effects'

import authSaga from './auth/sagas'
import naversSaga from './navers/sagas'

export default function* rootSaga() {
    return yield all([
        authSaga,
        naversSaga
    ])
}
