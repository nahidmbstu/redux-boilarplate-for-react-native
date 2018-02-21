// it is the root reducer so it is called index.js and imported at configurestore
import React, { Component } from 'react';

import { combineReducers } from 'redux'  // import combine reducer from  redux to combine all of your reducers
import peopleReducer from './people'   // import other reducers

const rootReducer = combineReducers({
    peopleReducer
})                                 // it takes object , give all imported reducers one by one


export default rootReducer    // export it to configure store

