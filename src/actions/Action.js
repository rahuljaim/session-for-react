import * as ActionType from "../constants/ActionType";
import axios from "axios";

export const getData = () => async (dispatch) => {
  await axios
    .get("https://jsonplaceholder.typicode.com/photos?_page=333&_limit=15")
    .then((response) => {
      dispatch({
        type: ActionType["GET_DATA"],
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log("action", error);
      dispatch({
        type: ActionType["U_ERROR"],
        payload: error,
      });
    });
};
