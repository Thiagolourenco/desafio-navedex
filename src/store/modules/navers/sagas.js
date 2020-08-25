import { all, call, takeLatest, put } from "redux-saga/effects";

import api from "../../../services/api";
import {
  NaversSuccess,
  NaversShowSuccess,
  NaversUpdateSuccess,
  NaversCreateSuccess,
  NaversCloseModal,
  NaversRemoveSuccess,
  NaversOpenModal,
  NaversOpenModalFeed,
} from "./actions";

export function* navers({ payload }) {
  try {
    const response = yield call(api.get, "/navers");

    yield put(NaversSuccess(response.data));
  } catch (error) {
    console.log("EROR", error);
  }
}

export function* naversShow({ payload }) {
  try {
    const response = yield call(api.get, `/navers/${payload.id}`);

    yield put(NaversShowSuccess(response.data));
  } catch (error) {
    console.log("ERROR", error);
  }
}

export function* naversRemove({ payload }) {
  try {
    const response = yield call(api.delete, `/navers/${payload.id}`);

    yield put(NaversRemoveSuccess(response.data));
    // yield put(NaversCloseModal());
    yield put(NaversOpenModalFeed());
  } catch (error) {
    console.log("ERROR", error);
  }
}

export function* naversUpdate({ payload }) {
  try {
    const obj = {
      job_role: payload.cargo,
      admission_date: payload.tempoempresa,
      birthdate: payload.idade,
      project: payload.projetoparticipou,
      name: payload.name,
      url: payload.url,
    };

    const response = yield call(api.put, `/navers/${payload.id}`, obj);

    yield put(NaversUpdateSuccess(response.data));
  } catch (error) {
    console.log("ERRO", error);
  }
}

export function* naversCreate({ payload }) {
  try {
    const obj = {
      job_role: payload.cargo,
      admission_date: payload.tempoempresa,
      birthdate: payload.idade,
      project: payload.projetoparticipou,
      name: payload.name,
      url: payload.url,
    };

    const response = yield call(api.post, "navers", obj);

    yield put(NaversCreateSuccess(response.data));
    yield put(NaversOpenModalFeed());
  } catch (error) {
    console.log("ERROR", error);
  }
}

export default all([
  takeLatest("@navers/NAVERS_REQUEST", navers),
  takeLatest("@navers/NAVERS_REMOVE_REQUEST", naversRemove),
  takeLatest("@navers/NAVERS_SHOW_REQUEST", naversShow),
  takeLatest("@navers/NAVERS_UPDATE_REQUEST", naversUpdate),
  takeLatest("@navers/NAVERS_CREATE_REQUEST", naversCreate),
]);
