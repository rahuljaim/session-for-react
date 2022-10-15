import { connect } from "react-redux";
import App from "../App";
import { bindActionCreators } from "redux";
import { getData } from "../actions/Action";

const mapStatetoProps = (state) => {
  console.log("container", state.values);
  return {
    fetched_data: state.values.data,
    error_values: state.values.error,
  };
};
const mapDispatchtoProps = (dispatch) => {
  return bindActionCreators(
    {
      getData,
    },
    dispatch
  );
};

export default connect(mapStatetoProps, mapDispatchtoProps)(App);
