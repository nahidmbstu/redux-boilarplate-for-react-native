import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux'  // import store from redux and apply middleware to use different middleware like redux-thunk
import rootReducer from './reducers/index'   //import the reducers to provide it to store 
import thunk from 'redux-thunk'  // import thunk middleware

export default function configureStore() {
    let store = createStore(rootReducer, applyMiddleware(thunk))  /// only  reducer is required
    return store
}

