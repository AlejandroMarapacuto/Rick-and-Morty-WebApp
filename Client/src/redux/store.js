// import { createStore, applyMiddleware, compose } from "redux";
// import reducer from "./reducer.js";
// import thunkMiddleware from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//   reducer,
//   composeEnhancer(applyMiddleware(thunkMiddleware))
// );

// export default store;

import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer";
import thunk from "redux-thunk";
// npm i "redux-devtools-extension"
import { composeWithDevTools } from "redux-devtools-extension";

// Create recibe 1 Reducer 2 Configuraciones
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
