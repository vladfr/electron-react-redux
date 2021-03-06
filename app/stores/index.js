import env from '../env'
import { createStore, applyMiddleware, compose } from 'redux'
import { persistentStore } from 'redux-pouchdb-plus';
import thunkMiddleware from 'redux-thunk';

import reducer from '../reducers/main'
import DevTools from '../containers/DevTools';

import PouchDB from 'pouchdb';

const db = new PouchDB('_pouchdb');

//optional
const applyMiddlewares = applyMiddleware(
  thunkMiddleware
);

const dev_enhancer = compose(
  applyMiddleware(thunkMiddleware),
  persistentStore({db}),
  DevTools.instrument()
);

const prod_enhancer = compose(
  applyMiddleware(thunkMiddleware),
  persistentStore({db})
);

let enhancer;
(env.name === "development") ? enhancer = dev_enhancer : enhancer = prod_enhancer;

const store = createStore(reducer, enhancer);

export default store;