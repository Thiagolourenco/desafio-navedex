export function NaversRequest() {
  return {
    type: "@navers/NAVERS_REQUEST",
  };
}

export function NaversSuccess(data) {
  return {
    type: "@navers/NAVERS_SUCCESS",
    payload: { data },
  };
}

export function NaversFailure(error) {
  return {
    type: "@navers/NAVERS_FAILURE",
    payload: { error },
  };
}

// remove

export function NaversRemoveRequest(id) {
  console.log("ID", id);
  return {
    type: "@navers/NAVERS_REMOVE_REQUEST",
    payload: { id },
  };
}

export function NaversRemoveSuccess(data) {
  return {
    type: "@navers/NAVERS_REMOVE_SUCCESS",
    payload: { data },
  };
}

export function NaversRemoveFailure(error) {
  return {
    type: "@navers/NAVERS_REMOVE_FAILURE",
    payload: { error },
  };
}

// show
export function NaversShowRequest(id) {
  return {
    type: "@navers/NAVERS_SHOW_REQUEST",
    payload: { id },
  };
}

export function NaversShowSuccess(data) {
  return {
    type: "@navers/NAVERS_SHOW_SUCCESS",
    payload: { data },
  };
}

export function NaversShowFailure(error) {
  return {
    type: "@navers/NAVERS_SHOW_FAILURE",
    payload: { error },
  };
}

//update
export function NaversUpdateRequest(
  id,
  name,
  cargo,
  idade,
  tempoempresa,
  projetoparticipou,
  url
) {
  return {
    type: "@navers/NAVERS_UPDATE_REQUEST",
    payload: { id, name, cargo, idade, tempoempresa, projetoparticipou, url },
  };
}

export function NaversUpdateSuccess(data) {
  return {
    type: "@navers/NAVERS_UPDATE_SUCCESS",
    payload: { data },
  };
}

export function NaversUpdateFailure(error) {
  return {
    type: "@navers/NAVERS_UPDATE_FAILURE",
    payload: { error },
  };
}

// create
export function NaversCreateRequest(
  name,
  cargo,
  idade,
  tempoempresa,
  projetoparticipou,
  url
) {
  return {
    type: "@navers/NAVERS_CREATE_REQUEST",
    payload: { name, cargo, idade, tempoempresa, projetoparticipou, url },
  };
}

export function NaversCreateSuccess(data) {
  return {
    type: "@navers/NAVERS_CREATE_SUCCESS",
    payload: { data },
  };
}

export function NaversCreateFailure(error) {
  return {
    type: "@navers/NAVERS_CREATE_FAILURE",
    payload: { error },
  };
}

//modal
export function NaversOpenModal() {
  return {
    type: "@navers/NAVERS_OPEN_MODAL",
  };
}

export function NaversCloseModal() {
  return {
    type: "@navers/NAVERS_CLOSE_MODAL",
  };
}

export function NaversOpenModalProfile() {
  return {
    type: "@navers/NAVERS_OPEN_MODAL_PROFILE",
  };
}

export function NaversCloseModalProfile() {
  return {
    type: "@navers/NAVERS_CLOSE_MODAL_PROFILE",
  };
}

export function NaversOpenModalFeed() {
  return {
    type: "@navers/NAVERS_OPEN_MODAL_FEED",
  };
}

export function NaversCloseModalFeed() {
  return {
    type: "@navers/NAVERS_CLOSE_MODAL_FEED",
  };
}
