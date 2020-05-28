import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import ContactListContainer from './containers/contact-list/ContactList';
import ContactAddContainer from './containers/contact-add/ContactAdd';
import Layout from './hoc/layout/Layout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Layout>
            <Switch>
              <Redirect exact from="/" to="contacts" />
              <Route exact path="/contacts" component={ContactListContainer} />
              <Route exact path="/contacts/add" component={ContactAddContainer} />
              <Route exact path="/contacts/edit/:id" component={ContactAddContainer} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;