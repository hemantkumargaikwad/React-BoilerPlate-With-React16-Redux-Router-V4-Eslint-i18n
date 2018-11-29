import React, { Component } from 'react';
import { BrowserRouter, Router, Switch, Route } from 'react-router-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import arLocalData from 'react-intl/locale-data/ar';
import esLocaleData from 'react-intl/locale-data/es';
import { Provider } from 'react-redux';
import translations from './i18n/locales';
import Login from './modules/login/containers';
import About from './modules/dashboard/containers';
import store from './redux/store';
import history from './history';
import './App.css';

addLocaleData(arLocalData);
addLocaleData(esLocaleData);

class App extends Component {
  render() {
    const locale = window.location.search.replace('?locale=', '') || 'en';
    const messages = translations[locale];

    return (
      <IntlProvider locale={locale} key={locale} messages={messages}>
        <Provider store={store}>
          <div className="App">
            <BrowserRouter>
              <Router history={history}>
                <Switch>
                  <Route path="/" exact component={Login} />
                  <Route path="/about/" component={About} />
                  <Route path="/users/" render={() => <h2>Users</h2>} />
                </Switch>
              </Router>
            </BrowserRouter>
          </div>
        </Provider>
      </IntlProvider>
    );
  }
}

export default App;
