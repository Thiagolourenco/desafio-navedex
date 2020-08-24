import { all, takeLatest, call, put } from "redux-saga/effects";

// @auth/AUTHENTICATION_REQUEST
import api from "../../../services/api";

import { AuthenticationSuccess } from "./actions";

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
    console.log("ERROR", error);
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
