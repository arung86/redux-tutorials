const redux = require("redux");
const ReduxThunk = require("redux-thunk").default;

const INCREMENT_COUNTER = "INCREMENT_COUNTER";

function increment() {
  return {
    type: INCREMENT_COUNTER,
  };
}

function incrementAsync() {
  return (dispatch) => {
    setTimeout(() => {
      // Yay! Can invoke sync or async actions with `dispatch`
      dispatch(increment());
    }, 1000);
  };
}

const reducer = (state = { count: 0 }, action) => {
  console.log("action", action);
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};

const store = redux.createStore(reducer, redux.applyMiddleware(ReduxThunk));

const unsubscribe = store.subscribe(() => console.log("in state update"));

store.dispatch(incrementAsync());

unsubscribe();
