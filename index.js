import React, { Component } from 'react';
import { AppRegistry } from 'react-native'

import { Provider } from 'react-redux' // import the store provider from react-redux

import configureStore from './configureStore'  // configure your store and provide it to store provider

import App from './App' // import main app component

const store = configureStore()  // create store 

const ReduxApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent('reduxapp', () => ReduxApp)  // register the app
