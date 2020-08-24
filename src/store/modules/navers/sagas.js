import { all, call, takeLatest, put } from "redux-saga/effects";

import api from "../../../services/api";
import { NaversSuccess } from "./actions";

export function* navers({ payload }) {
  try {
    const response = yield call(api.get, "/navers");

    yield put(NaversSuccess(response.data));
  } catch (error) {
    console.log("EROR", error);
  }
}

export function* naversRemove({ payload }) {
  try {
    console.log("PAY", payload);
  } catch (error) {
    console.log("ERROR", error);
  }
}

export default all([
  takeLatest("@navers/NAVERS_REQUEST", navers),
  takeLatest("@navers/NAVERS_REMOVE_REQUEST", naversRemove),
]);
