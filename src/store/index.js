import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { tasks } from "./../reducers/tasks";

export const store = createStore(
  tasks,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
store.subscribe(() => console.log(store.getState()));
