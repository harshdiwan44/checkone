import { connect } from "react-redux";

import { setLoaderActivity } from "../../actions";

import Loader from "./loader";

const mapStateToProps = (state) => {
  return {
    state: Object.assign({}, state.Shared),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLoaderActivity: (value) => {
      dispatch(setLoaderActivity(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Loader);
