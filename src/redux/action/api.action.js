import axios from "axios";
import { BASE_URL } from "../../shared/APIkey";
import * as ActionTypes from "../ActionTypes";

export const readData = () => (dispatch) => {
  try {
    axios.get(BASE_URL + "posts").then((res) => {
      dispatch({ type: ActionTypes.READ_DATA, payload: res.data });
    });
  } catch (error) {
    console.log(error);
  }
};

export const postData = (data) => (dispatch) => {
  try {
    if (data !== null) {
      axios
        .post(BASE_URL + "posts", data)
        .then((res) => {
          dispatch({ type: ActionTypes.POST_DATA, payload: res.data });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  } catch (error) {
    console.log(error);
  }
};
 export const deletData = (id) => (dispatch) =>{
    console.log(id);
    axios.delete(`${BASE_URL}posts/${id}`)
    .then(res => {
        if (res.status === 200) {
            dispatch({ type: ActionTypes.DELET_DATA, payload: id });
        }
    })
    .catch(error => {
        console.log(error);
    });
 }