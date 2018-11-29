import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { injectIntl, defineMessages } from 'react-intl';
import * as app from '../../../redux/actions/app';
import LoginComponent from '../components';

const messages = defineMessages({
  title: {
    id: 'app.title',
    defaultMessage: 'Welcome to React'
  },
  content1: {
    id: 'app.content1',
    defaultMessage: 'To get started, edit'
  },
  content2: {
    id: 'app.content2',
    defaultMessage: 'and save to reload.'
  },
  menu: {
    id: 'app.menu',
    defaultMessage: 'Home'
  }
});

class Login extends Component {
  componentDidMount = () => {
    // this.props.appActions.request();
    // this.props.history.push('/about/');
  };
  render() {
    const {
      intl: { formatMessage }
    } = this.props;
    return (
      <LoginComponent
        welcomeMessage={this.props.welcome}
        formatMessage={formatMessage}
        messages={messages}
      />
    );
  }
}

const mapStateToProps = state => ({
  welcome: state.app.welcomeMessage
});
const mapDispatchToProps = dispatch => ({
  appActions: bindActionCreators(app, dispatch)
});
export default withRouter(
  injectIntl(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(Login)
  )
);
