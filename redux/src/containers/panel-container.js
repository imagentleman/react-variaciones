import { connect } from "react-redux";
import Panel from "components/panel";

const mapStateToProps = state => {
  return {
    copy: state.data.copy
  };
};

const PanelContainer = connect(mapStateToProps)(Panel);

export default PanelContainer;
