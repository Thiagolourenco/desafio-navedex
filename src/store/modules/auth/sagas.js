import { all, takeLatest, call, put } from "redux-saga/effects";
import { showMessage } from 'react-native-flash-message'

import api from "../../../services/api";

import { AuthenticationSuccess, AuthenticationFailure } from "./actions";

export function* authentication({ payload }) {
  try {
    const { email, password } = payload;
    const value = {
      email: email,
      password: password,
    };

    const response = yield call(api.post, "/users/login", value);

    const { token } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(AuthenticationSuccess(token));
  } catch (error) {
    showMessage({
      type: "danger",
      message: "Credenciais erradas, tente novamente."
    })
    yield put(AuthenticationFailure(error));
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest("persist/REHYDRATE", setToken),
  takeLatest("@auth/AUTHENTICATION_REQUEST", authentication),
]);
