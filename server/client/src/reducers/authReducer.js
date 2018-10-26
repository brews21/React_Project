import { FETCH_USER } from "../actions/types";

export default function(state = null, action) {
  //console.log(action);
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    // by default we donot know if the user is logged in or not
    default:
      return state;
  }
}
