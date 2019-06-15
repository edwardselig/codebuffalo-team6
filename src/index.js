import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { BrowserRouter } from 'react-router-dom';
import { setContext } from 'apollo-link-context';
import { split } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { AUTH_TOKEN } from './constants';
import * as serviceWorker from './serviceWorker';
import App from './components/App';
import rootReducer from './reducers/index';

const httpLink = createHttpLink({
    uri: 'http://localhost:4000'
});

// Get any persisted state
const persistedState = localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')) : {};

// Set up redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
});

// Compose Enhansers
const enhancer = composeEnhancers(
    applyMiddleware(thunkMiddleware)
    // other store enhancers if any
);

// Build store with enhansers and persisted state
const store = createStore(rootReducer, persistedState, enhancer);

store.subscribe(() => {
    // persist your state
    localStorage.setItem('state', JSON.stringify({ controlPanel: store.getState().controlPanel }));
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem(AUTH_TOKEN);
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ''
        }
    };
});

const wsLink = new WebSocketLink({
    uri: `ws://localhost:4000`,
    options: {
        reconnect: true,
        connectionParams: {
            authToken: localStorage.getItem(AUTH_TOKEN)
        }
    }
});

const link = split(
    ({ query }) => {
        const { kind, operation } = getMainDefinition(query);
        return kind === 'OperationDefinition' && operation === 'subscription';
    },
    wsLink,
    authLink.concat(httpLink)
);

export const client = new ApolloClient({
    link,
    cache: new InMemoryCache()
});

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <ApolloProvider client={client}>
                <App />
            </ApolloProvider>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
