import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import ExampleComponent from './ExampleComponent';

class App extends Component {
    render() {
        /*
    return (
      <div className="center w85">
        <Header />
        <div className="ph3 pv1 background-gray">
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/new/1" />} />
            <Route exact path="/create" component={CreateLink} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/top" component={LinkList} />
            <Route exact path="/new/:page" component={LinkList} />
          </Switch>
        </div>
      </div>
    )
    */
        return (
            <div className="center w85">
                <div className="ph3 pv1 background-gray">
                    <Switch>
                        <Route exact path="/" component={ExampleComponent} />
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state /* , ownProps */) => ({
    state
});
const mapDispatchToProps = {};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(App)
);
