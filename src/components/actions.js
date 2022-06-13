import * as t from "./actionTypes";

export const setLoader = (data) => ({
  type: t.SETLOADER,
  data,
});

export const setLoaderActivity = (value) => async (dispatch, getState) => {
  dispatch(setLoader(value));
};
