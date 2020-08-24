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
    console.log('ID', id)
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
