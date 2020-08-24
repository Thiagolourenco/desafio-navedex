import produce from "immer";

const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null,
  modal: false,
  loadingRemove: false,
  loadingProfile: false,
  user: [],
  update: null
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@navers/NAVERS_REQUEST": {
        draft.loading = true;
        break;
      }

      case "@navers/NAVERS_SUCCESS": {
        draft.data = action.payload.data;
        draft.loading = false;
        break;
      }

      case "@navers/NAVERS_FAILURE": {
        draft.error = action.payload.error;
        draft.loading = false;
        break;
      }

      case "@navers/NAVERS_REMOVE_REQUEST": {
        draft.loadingRemove = true;
        break;
      }

      case "@navers/NAVERS_REMOVE_SUCCESS": {
        // draft.error = action.payload.error;
        draft.loadingRemove = false;
        draft.modal = true;
        break;
      }

      case "@navers/NAVERS_REMOVE_FAILURE": {
        draft.error = action.payload.error;
        draft.loadingRemove = false;
        break;
      }

      case "@navers/NAVERS_SHOW_REQUEST": {
        draft.loadingProfile = true;
        break;
      }

      case "@navers/NAVERS_SHOW_SUCCESS": {
        // draft.error = action.payload.error;
        draft.loadingProfile = false;
        draft.user = action.payload.data;
        break;
      }

      case "@navers/NAVERS_SHOW_FAILURE": {
        draft.error = action.payload.error;
        draft.loadingProfile = false;
        break;
      }

      case "@navers/NAVERS_UPDATE_REQUEST": {
        draft.loading = true;
        break;
      }

      case "@navers/NAVERS_UPDATE_SUCCESS": {
        // draft.error = action.payload.error;
        draft.loading = false;
        draft.update = action.payload.data;
        draft.modal = true;
        break;
      }

      case "@navers/NAVERS_UPDATE_FAILURE": {
        draft.error = action.payload.error;
        draft.loading = false;
        break;
      }

      default:
        draft.loading = false;
        break;
    }
  });
}