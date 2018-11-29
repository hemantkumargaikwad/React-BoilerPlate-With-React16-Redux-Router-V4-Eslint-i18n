import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import * as app from '../../../redux/actions/app';
import About from '../components';

class Dashboard extends Component {
  componentDidMount = () => {
    // this.props.appActions.request();
  };
  callAction = () => {
    this.props.appActions.request();
  };
  render() {
    return <About callAction={this.callAction} />;
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  appActions: bindActionCreators(app, dispatch)
});
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Dashboard)
);
