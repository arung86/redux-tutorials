const redux = require("redux");
const ReduxThunk = require("redux-thunk").default;
const axios = require("axios").default;
// const applyMiddleware = redux.applyMiddleware;
// axios
// redux-thunk

const initalState = {
  users: [],
};

const FETCH_USERS = "FETCH_USERS";

const fetchUserRequest = () => {
  return {
    type: FETCH_USERS,
  };
};

const fetchUsers = () => {
  return function (dispatch) {
    axios
      .get("http://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // handle success
        console.log(response.data.length);
        dispatch(fetchUserRequest());
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  //   return { type: FETCH_USERS };
};

const reducer = (state = initalState, action) => {
  console.log("action dispatched", action);
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: [{ name: "React", age: 10 }],
      };

    default:
      return state;
  }
};

const store = redux.createStore(reducer, redux.applyMiddleware(ReduxThunk));
const unsubscribe = store.subscribe(() => console.log(store.getState()));
store.dispatch(fetchUsers());

unsubscribe();
