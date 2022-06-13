import * as t from "./actionTypes";
import { setLoaderActivity } from "../actions";

export const setLoader = (data) => ({
  type: t.SETLOADER,
  data,
});

export const setLoaderActivity = (value) => async (dispatch, getState) => {
  dispatch(setLoader(value));
};
