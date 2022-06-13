import { connect } from "react-redux";
import { setLoaderActivity } from "./actions";

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLoaderActivity: (value) => {
      dispatch(setLoaderActivity(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
