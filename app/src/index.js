import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reducer } from './reducers/jokeReducers'
import { ThemeProvider} from 'styled-components';
import theme from './Theme/theme';

const store = createStore(reducer, applyMiddleware(thunk));

const rootElement = document.getElementById('root');

ReactDOM.render(
  <ThemeProvider theme={theme}>

  <Provider store ={store}>
    <App />
  </Provider>
  </ThemeProvider>,
  rootElement
);



