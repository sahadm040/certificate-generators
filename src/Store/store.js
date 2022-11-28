import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // connect your redux store to chrome Redux DevtoolS

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
export default store;




// import { createStore, applyMiddleware, compose } from "redux";
// import RootReducer from './rootReducer'
// import thunkMiddleware from "redux-thunk";
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//     RootReducer,
//     composeEnhancers(applyMiddleware(thunkMiddleware))
//     );
//     export default store;